export interface adminStateType {
    uId: string;
    name: string;
    email: string;
    photo: string;
    isAuthonicated: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: string | undefined;
}

export interface adminCreationType{
    name: string;
    password: string;
    email: string;
    photo: File[];
    phone: string;
}

export interface adminCreationReturnType {
    uId: string;
    name: string;
    email: string;
    photo: string;
}

