import { IUser } from "../types/user";

export function prepareUserData(data: any) {
    const userData = [] as IUser[];

    data.map((row: any) => {
        userData.push({
            no: row.No,
            full_name: row.Name,
            email_participant: row.Email,
            company_name: row.Company,
            tel: row.Mobile_Number,
            no_participant: row.Number_of_participants
        })
    })

    console.log('objed data :', userData)
    console.log('range of user data :', userData.length);

    return userData
}