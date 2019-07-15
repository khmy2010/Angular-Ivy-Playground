export interface IUserModel {
  id: number,
  name: string,
  username: string,
  email: string,
  address: IUserAddressModel,
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}

export interface IUserAddressModel {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: {
    lat: string,
    lng: string
  }
}