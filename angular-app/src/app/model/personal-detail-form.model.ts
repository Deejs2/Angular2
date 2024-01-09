export interface PersonalDetail{
    firstname: string,
    lastname: string,
    dateOfBirth: Date,
    age: number,
    email: string,
    phone: string
    familyDetailArray: FamilyDetail
}

interface FamilyDetail{
    familyFirstname: string,
    familyLastname: string,
    familyDateOfBirth: Date,
    familyAge: number,
    familyEmail: string,
    familyPhone: string
}