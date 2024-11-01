import { http, HttpResponse } from 'msw';

// 요청 본문 타입 정의
interface LoginRequestBody {
  uid: string;
  password: string;
}

// 사용자 정보를 저장하기 위한 맵 생성
const usersDB = new Map<string, { id: number; password: string }>();

export const handlers = [
  // 기존 사용자 정보 요청
  http.get('https://example.com/user', () => {
    return HttpResponse.json({
      id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
      firstName: '규민',
      lastName: '이',
    });
  }),

  // 로그인 요청 핸들러
  http.post('/users/login', async ({ request }) => {
    // 요청 본문을 JSON으로 읽어오기
    const body = await request.json();

    // Type Assertion을 사용하여 LoginRequestBody 타입으로 지정
    const { uid, password } = body as LoginRequestBody;

    // 유저의 로그인 정보 검증 로직
    if (!uid || !password) {
      return HttpResponse.json(
        {
          success: false,
          response: null,
          error: {
            code: 400,
            message: '필요한 값이 없습니다.',
          },
        },
        { status: 400 }
      );
    }

    // 사용자 존재 여부 확인
    const user = usersDB.get(uid);

    // 사용자가 존재하지 않을 경우 신규 사용자 등록 처리
    if (!user) {
      const newUser = { id: usersDB.size + 1, password }; // 새 사용자의 ID는 유저 수에 따라 할당
      usersDB.set(uid, newUser); // 사용자 등록

      return HttpResponse.json({
        success: true,
        response: { id: newUser.id },
        error: null,
      });
    }

    // 사용자가 존재할 경우 비밀번호 확인
    if (user.password !== password) {
      return HttpResponse.json(
        {
          success: false,
          response: null,
          error: {
            code: 400,
            message: '아이디 또는 비밀번호가 다릅니다.',
          },
        },
        { status: 400 }
      );
    }

    // 로그인 성공 응답 반환
    return HttpResponse.json({
      success: true,
      response: { id: user.id },
      error: null,
    });
  }),
];
