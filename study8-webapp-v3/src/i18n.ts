import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    lang: {
                        vi: 'Vietnamese',
                        en: 'English',
                    },
                    text: {
                        signIn: 'Sign in',
                        email: 'Email address',
                        password: 'Password',
                        forgotPassword: 'Forgot password?',
                        getStarted: 'Get started',
                        dontHaveAccount: 'Don\'t have an account?',
                        or: 'Or',
                        error: 'An error has occurred'
                    },
                    button: {
                        signIn: 'Sign in',
                    }
                },
            },
            vi: {
                translation: {
                    lang: {
                        vi: 'Tiếng Việt',
                        en: 'English',
                    },
                    text: {
                        signIn: 'Đăng nhập',
                        email: 'Địa chỉ email',
                        password: 'Mật khẩu',
                        forgotPassword: 'Quên mật khẩu?',
                        getStarted: 'Tạo tài khoản',
                        dontHaveAccount: 'Chưa có tài khoản?',
                        or: 'Hoặc',
                        error: 'Đã có lỗi xảy ra'
                    },
                    button: {
                        signIn: 'Đăng nhập',
                    }
                },
            },
        },
        lng: localStorage.getItem('language') || 'en',
        fallbackLng: 'en',
        interpolation: { escapeValue: false },
    });

export default i18n;
