const config = {
  extends: ['@commitlint/config-conventional'],
  plugins: [
    {
      rules: {
        'header-format': ({ header }) => [
          /^[a-z]+: \S.*$/u.test(header ?? ''),
          "커밋 메시지는 '타입: 변경 내용' 형식이어야 합니다.",
        ],
        'subject-korean': ({ subject }) => [
          /[가-힣]/u.test(subject ?? ''),
          '변경 내용은 한글로 작성해야 합니다.',
        ],
        'body-korean': ({ body }) => [
          !body || /[가-힣]/u.test(body),
          '본문은 한글로 작성해야 합니다.',
        ],
      },
    },
  ],
  rules: {
    'scope-empty': [2, 'always'],
    'subject-case': [0],
    'header-format': [2, 'always'],
    'subject-korean': [2, 'always'],
    'body-korean': [2, 'always'],
  },
};

export default config;
