interface IPasword {
    s1?: number
    s2?: number
    s3?: number
    s4?: number
    s5?: number
}
interface IUser {
    id?: number
    name?: string
    pasword?: IPasword
}

type UserState = {
    users: IUser[]
    newPas: IPasword
}



type UserAction = {
    type: string
    user: IUser
}

type DispatchType = (args: UserAction) => UserAction
