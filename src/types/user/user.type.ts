export type TUser = {
    name: string;
    firstName: string;
    email: string;
    agreeTerms: boolean;
    plainPassword: {
        first: string;
        second: string;
    };
};
