export class DataStorage {

    public static setCurrentUser(user: string) {
      localStorage.setItem('currentUser', user);
    }
  
    public static getCurrentUser() {
      return localStorage.getItem('currentUser');
    }
  
    public static deleteCurrentUser() {
      localStorage.removeItem('currentUser');
    }
  
    public static setUserId(id: string) {
      localStorage.setItem('id', id);
    }
  
    public static getUserId() {
      return localStorage.getItem('id');
    }
  
    public static deleteUserId() {
      localStorage.removeItem('id');
    }
  
    public static setName(Name: string) {
      localStorage.setItem('Name', Name);
    }
  
    public static getName() {
      return localStorage.getItem('Name');
    }
  
    public static deleteName() {
      localStorage.removeItem('Name');
    }
  
    public static setEmail(Email: string) {
      localStorage.setItem('Email', Email);
    }
  
    public static getEmail() {
      return localStorage.getItem('Email');
    }
  
    public static deleteEmail() {
      localStorage.removeItem('Email');
    }
  
    public static setAccessLevel(accessLevel: string) {
      localStorage.setItem('accessLevel', accessLevel);
    }
  
    public static getAccessLevel() {
      return localStorage.getItem('accessLevel');
    }
  
    public static deleteAccessLevel() {
      localStorage.removeItem('accessLevel');
    }
  
    public static clearDataStorage() {
      localStorage.clear();
    }
  
  }
  