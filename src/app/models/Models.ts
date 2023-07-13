export class Login{
  username?:string;
  password?:string;
}

export class User{
  username?:string;
  password?:string;
  profil?:Profil;
}

export class InterNalResponse<T>{
  msg?:string;
  success?:boolean;
  data?: T
}

export class Collaborator {
  id?: number;
  nom?: string;
  prenom?: string;
  dateNaissance?: Date;
  lieuNaissance?: string;
  telephone?: string;
  email?: string;
  typePiece?: string;
  numeroPiece?: string;
  service?: Service;
  fonction?: string;
  contrat?: Contrat;
  statut?: string; //blacklisté ou non blacklisté
  motif?: string;
}

export class Token {
  token?: string;
  username?: string;
}

export class ResponseApi<T> {
  status?: number;
  message?: string;
  data?: T;
  token?: Token;
}

export class Profil {
  id?: number
  role?: string //SUPER_ADMIN | ADMIN | USER
  etat?: number //1 ou 0
}

export class Structure {
  id?: number
  name?: string
}

export class Direction {
  id?: number
  name?: string
  structure?: Structure;
}

export class Departement {
  id?: number
  name?: string
  direction?: Direction;
}

export class Service {
  id?: number
  name?: string
  departement?: Departement;
}

export class Contrat {
  id?: number
  type?: string
  dateDebut?: Date;
  dateFin?: Date;
}
