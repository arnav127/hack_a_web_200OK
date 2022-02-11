import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   *
   *     Errors messages and codes mapped to
   *     fields or non fields errors.
   *     Example:
   *     {
   *         field_name: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ],
   *         other_field: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ],
   *         nonFieldErrors: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ]
   *     }
   *
   */
  ExpectedErrorType: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
};

/**
 * Archive account and revoke refresh tokens.
 *
 * User must be verified and confirm password.
 */
export type ArchiveAccount = {
  __typename?: 'ArchiveAccount';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type CreateHospitalResource = {
  __typename?: 'CreateHospitalResource';
  hospitalResource?: Maybe<HospitalResourceType>;
  ok?: Maybe<Scalars['Boolean']>;
};

export type CreateMedicinePrescription = {
  __typename?: 'CreateMedicinePrescription';
  medp?: Maybe<MedicinePrescriptionType>;
};

export type CreateMedicineRecord = {
  __typename?: 'CreateMedicineRecord';
  medr?: Maybe<MedicineRecordType>;
};

export type CreatePatient = {
  __typename?: 'CreatePatient';
  patient?: Maybe<PatientType>;
};

export type CreatePatientAuthorizedHospital = {
  __typename?: 'CreatePatientAuthorizedHospital';
  ok?: Maybe<Scalars['Boolean']>;
  pah?: Maybe<PatientAuthorizedHospitalType>;
};

/**
 * Delete account permanently or make `user.is_active=False`.
 *
 * The behavior is defined on settings.
 * Anyway user refresh tokens are revoked.
 *
 * User must be verified and confirm password.
 */
export type DeleteAccount = {
  __typename?: 'DeleteAccount';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type DeletePatientAuthorizedHospital = {
  __typename?: 'DeletePatientAuthorizedHospital';
  ok?: Maybe<Scalars['Boolean']>;
};

export type DoctorNotesType = {
  __typename?: 'DoctorNotesType';
  diagnosis: Scalars['String'];
  doctor: Scalars['String'];
  id: Scalars['ID'];
  notes: Scalars['String'];
  patient: PatientType;
};

export type HospitalResourceType = {
  __typename?: 'HospitalResourceType';
  bedAvailable: Scalars['Int'];
  bedCapacity: Scalars['Int'];
  bloodTest: Scalars['Boolean'];
  catscan: Scalars['Boolean'];
  colonoscopy: Scalars['Boolean'];
  ecg: Scalars['Boolean'];
  eeg: Scalars['Boolean'];
  ekg: Scalars['Boolean'];
  hospital: HospitalType;
  icuAvailable: Scalars['Int'];
  icuCapacity: Scalars['Int'];
  id: Scalars['ID'];
  mammogram: Scalars['Boolean'];
  mri: Scalars['Boolean'];
  ultrasound: Scalars['Boolean'];
  urineTest: Scalars['Boolean'];
  ventilatorAvailable: Scalars['Int'];
  ventilatorCapacity: Scalars['Int'];
  xray: Scalars['Boolean'];
};

export type HospitalType = {
  __typename?: 'HospitalType';
  address: Scalars['String'];
  hospitalresource?: Maybe<HospitalResourceType>;
  id: Scalars['ID'];
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  patientauthorizedhospitalSet: Array<PatientAuthorizedHospitalType>;
  phone: Scalars['String'];
  user: UserType;
};

export type MedicinePrescriptionType = {
  __typename?: 'MedicinePrescriptionType';
  doses: Scalars['String'];
  id: Scalars['ID'];
  medicine: Scalars['String'];
  medicinerecordSet: Array<MedicineRecordType>;
};

export type MedicineRecordType = {
  __typename?: 'MedicineRecordType';
  id: Scalars['ID'];
  patient: PatientType;
  prescriptions: Array<MedicinePrescriptionType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Archive account and revoke refresh tokens.
   *
   * User must be verified and confirm password.
   */
  archiveAccount?: Maybe<ArchiveAccount>;
  createHospitalResource?: Maybe<CreateHospitalResource>;
  createMedicinePrescription?: Maybe<CreateMedicinePrescription>;
  createMedicineRecord?: Maybe<CreateMedicineRecord>;
  createPatient?: Maybe<CreatePatient>;
  createPatientAuthorizedHospital?: Maybe<CreatePatientAuthorizedHospital>;
  /**
   * Delete account permanently or make `user.is_active=False`.
   *
   * The behavior is defined on settings.
   * Anyway user refresh tokens are revoked.
   *
   * User must be verified and confirm password.
   */
  deleteAccount?: Maybe<DeleteAccount>;
  deletePatientAuthorizedHospital?: Maybe<DeletePatientAuthorizedHospital>;
  /**
   * Change account password when user knows the old password.
   *
   * A new token and refresh token are sent. User must be verified.
   */
  passwordChange?: Maybe<PasswordChange>;
  /**
   * Change user password without old password.
   *
   * Receive the token that was sent by email.
   *
   * If token and new passwords are valid, update
   * user password and in case of using refresh
   * tokens, revoke all of them.
   *
   * Also, if user has not been verified yet, verify it.
   */
  passwordReset?: Maybe<PasswordReset>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  refreshToken?: Maybe<RefreshToken>;
  /**
   * Register user with fields defined in the settings.
   *
   * If the email field of the user model is part of the
   * registration fields (default), check if there is
   * no user with that email or as a secondary email.
   *
   * If it exists, it does not register the user,
   * even if the email field is not defined as unique
   * (default of the default django user model).
   *
   * When creating the user, it also creates a `UserStatus`
   * related to that user, making it possible to track
   * if the user is archived, verified and has a secondary
   * email.
   *
   * Send account verification email.
   *
   * If allowed to not verified users login, return token.
   */
  register?: Maybe<Register>;
  /**
   * Sends activation email.
   *
   * It is called resend because theoretically
   * the first activation email was sent when
   * the user registered.
   *
   * If there is no user with the requested email,
   * a successful response is returned.
   */
  resendActivationEmail?: Maybe<ResendActivationEmail>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  revokeToken?: Maybe<RevokeToken>;
  /**
   * Send password reset email.
   *
   * For non verified users, send an activation
   * email instead.
   *
   * Accepts both primary and secondary email.
   *
   * If there is no user with the requested email,
   * a successful response is returned.
   */
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmail>;
  /**
   * Send activation to secondary email.
   *
   * User must be verified and confirm password.
   */
  sendSecondaryEmailActivation?: Maybe<SendSecondaryEmailActivation>;
  /**
   * Swap between primary and secondary emails.
   *
   * Require password confirmation.
   */
  swapEmails?: Maybe<SwapEmails>;
  /**
   * Obtain JSON web token for given user.
   *
   * Allow to perform login with different fields,
   * and secondary email if set. The fields are
   * defined on settings.
   *
   * Not verified users can login by default. This
   * can be changes on settings.
   *
   * If user is archived, make it unarchive and
   * return `unarchiving=True` on output.
   */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  /**
   * Update user model fields, defined on settings.
   *
   * User must be verified.
   */
  updateAccount?: Maybe<UpdateAccount>;
  updateHospitalResource?: Maybe<UpdateHospitalResource>;
  updateMedicinePrescription?: Maybe<UpdateMedicinePrescription>;
  updateMedicineRecord?: Maybe<UpdateMedicineRecord>;
  updatePatient?: Maybe<UpdatePatient>;
  /**
   * Verify user account.
   *
   * Receive the token that was sent by email.
   * If the token is valid, make the user verified
   * by making the `user.status.verified` field true.
   */
  verifyAccount?: Maybe<VerifyAccount>;
  /**
   * Verify user secondary email.
   *
   * Receive the token that was sent by email.
   * User is already verified when using this mutation.
   *
   * If the token is valid, add the secondary email
   * to `user.status.secondary_email` field.
   *
   * Note that until the secondary email is verified,
   * it has not been saved anywhere beyond the token,
   * so it can still be used to create a new account.
   * After being verified, it will no longer be available.
   */
  verifySecondaryEmail?: Maybe<VerifySecondaryEmail>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  verifyToken?: Maybe<VerifyToken>;
};


export type MutationArchiveAccountArgs = {
  password: Scalars['String'];
};


export type MutationCreateHospitalResourceArgs = {
  bedAvailable?: InputMaybe<Scalars['Int']>;
  bedCapacity?: InputMaybe<Scalars['Int']>;
  bloodTest?: InputMaybe<Scalars['Boolean']>;
  catscan?: InputMaybe<Scalars['Boolean']>;
  colonoscopy?: InputMaybe<Scalars['Boolean']>;
  ecg?: InputMaybe<Scalars['Boolean']>;
  eeg?: InputMaybe<Scalars['Boolean']>;
  ekg?: InputMaybe<Scalars['Boolean']>;
  icuAvailable?: InputMaybe<Scalars['Int']>;
  icuCapacity?: InputMaybe<Scalars['Int']>;
  mammogram?: InputMaybe<Scalars['Boolean']>;
  mri?: InputMaybe<Scalars['Boolean']>;
  ultrasound?: InputMaybe<Scalars['Boolean']>;
  urineTest?: InputMaybe<Scalars['Boolean']>;
  ventilatorAvailable?: InputMaybe<Scalars['Int']>;
  ventilatorCapacity?: InputMaybe<Scalars['Int']>;
  xray?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateMedicinePrescriptionArgs = {
  doses?: InputMaybe<Scalars['String']>;
  medicine?: InputMaybe<Scalars['String']>;
};


export type MutationCreateMedicineRecordArgs = {
  patientId?: InputMaybe<Scalars['String']>;
  prescriptionId?: InputMaybe<Scalars['String']>;
};


export type MutationCreatePatientArgs = {
  aadhar: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
};


export type MutationCreatePatientAuthorizedHospitalArgs = {
  patientId?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteAccountArgs = {
  password: Scalars['String'];
};


export type MutationDeletePatientAuthorizedHospitalArgs = {
  patientId?: InputMaybe<Scalars['String']>;
};


export type MutationPasswordChangeArgs = {
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type MutationPasswordResetArgs = {
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
  token: Scalars['String'];
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  password1: Scalars['String'];
  password2: Scalars['String'];
  username: Scalars['String'];
};


export type MutationResendActivationEmailArgs = {
  email: Scalars['String'];
};


export type MutationRevokeTokenArgs = {
  refreshToken: Scalars['String'];
};


export type MutationSendPasswordResetEmailArgs = {
  email: Scalars['String'];
};


export type MutationSendSecondaryEmailActivationArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSwapEmailsArgs = {
  password: Scalars['String'];
};


export type MutationTokenAuthArgs = {
  email?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  username?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateAccountArgs = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateHospitalResourceArgs = {
  bedAvailable?: InputMaybe<Scalars['Int']>;
  bedCapacity?: InputMaybe<Scalars['Int']>;
  bloodTest?: InputMaybe<Scalars['Boolean']>;
  catscan?: InputMaybe<Scalars['Boolean']>;
  colonoscopy?: InputMaybe<Scalars['Boolean']>;
  ecg?: InputMaybe<Scalars['Boolean']>;
  eeg?: InputMaybe<Scalars['Boolean']>;
  ekg?: InputMaybe<Scalars['Boolean']>;
  icuAvailable?: InputMaybe<Scalars['Int']>;
  icuCapacity?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  mammogram?: InputMaybe<Scalars['Boolean']>;
  mri?: InputMaybe<Scalars['Boolean']>;
  ultrasound?: InputMaybe<Scalars['Boolean']>;
  urineTest?: InputMaybe<Scalars['Boolean']>;
  ventilatorAvailable?: InputMaybe<Scalars['Int']>;
  ventilatorCapacity?: InputMaybe<Scalars['Int']>;
  xray?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateMedicinePrescriptionArgs = {
  doses?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  medicine?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateMedicineRecordArgs = {
  id: Scalars['String'];
  patientId?: InputMaybe<Scalars['String']>;
  prescriptionId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePatientArgs = {
  aadhar?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};


export type MutationVerifyAccountArgs = {
  token: Scalars['String'];
};


export type MutationVerifySecondaryEmailArgs = {
  token: Scalars['String'];
};


export type MutationVerifyTokenArgs = {
  token: Scalars['String'];
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

/**
 * Obtain JSON web token for given user.
 *
 * Allow to perform login with different fields,
 * and secondary email if set. The fields are
 * defined on settings.
 *
 * Not verified users can login by default. This
 * can be changes on settings.
 *
 * If user is archived, make it unarchive and
 * return `unarchiving=True` on output.
 */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  refreshToken?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
  unarchiving?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserNode>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/**
 * Change account password when user knows the old password.
 *
 * A new token and refresh token are sent. User must be verified.
 */
export type PasswordChange = {
  __typename?: 'PasswordChange';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  refreshToken?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

/**
 * Change user password without old password.
 *
 * Receive the token that was sent by email.
 *
 * If token and new passwords are valid, update
 * user password and in case of using refresh
 * tokens, revoke all of them.
 *
 * Also, if user has not been verified yet, verify it.
 */
export type PasswordReset = {
  __typename?: 'PasswordReset';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type PatientAuthorizedHospitalType = {
  __typename?: 'PatientAuthorizedHospitalType';
  hospitalId: HospitalType;
  id: Scalars['ID'];
  patientId: PatientType;
};

export type PatientType = {
  __typename?: 'PatientType';
  aadhar: Scalars['String'];
  doctornotes?: Maybe<DoctorNotesType>;
  id: Scalars['ID'];
  medicinerecord?: Maybe<MedicineRecordType>;
  name: Scalars['String'];
  patientauthorizedhospitalSet: Array<PatientAuthorizedHospitalType>;
  phone: Scalars['String'];
  testresult?: Maybe<TestResultType>;
};

export type Query = {
  __typename?: 'Query';
  allHospitalResources?: Maybe<Array<Maybe<HospitalResourceType>>>;
  allHospitals?: Maybe<Array<Maybe<HospitalType>>>;
  currentHospitalResource?: Maybe<HospitalResourceType>;
  doctorNotes?: Maybe<Array<Maybe<DoctorNotesType>>>;
  hospital?: Maybe<HospitalType>;
  hospitalResource?: Maybe<HospitalResourceType>;
  latestDoctorNotes?: Maybe<DoctorNotesType>;
  latestMedicineRecords?: Maybe<MedicineRecordType>;
  me?: Maybe<UserNode>;
  medicineRecords?: Maybe<Array<Maybe<MedicineRecordType>>>;
  patient?: Maybe<PatientType>;
  patientsAdmitted?: Maybe<Array<Maybe<PatientAuthorizedHospitalType>>>;
  patientsAll?: Maybe<Array<Maybe<PatientType>>>;
  testResult?: Maybe<Array<Maybe<TestResultType>>>;
  user?: Maybe<UserNode>;
  users?: Maybe<UserNodeConnection>;
};


export type QueryDoctorNotesArgs = {
  patient?: InputMaybe<Scalars['String']>;
};


export type QueryHospitalArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type QueryHospitalResourceArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type QueryLatestDoctorNotesArgs = {
  patient?: InputMaybe<Scalars['String']>;
};


export type QueryLatestMedicineRecordsArgs = {
  patient?: InputMaybe<Scalars['String']>;
};


export type QueryMedicineRecordsArgs = {
  patient?: InputMaybe<Scalars['String']>;
};


export type QueryPatientArgs = {
  aadhar?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};


export type QueryTestResultArgs = {
  patient?: InputMaybe<Scalars['String']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  status_Archived?: InputMaybe<Scalars['Boolean']>;
  status_SecondaryEmail?: InputMaybe<Scalars['String']>;
  status_Verified?: InputMaybe<Scalars['Boolean']>;
  username?: InputMaybe<Scalars['String']>;
  username_Icontains?: InputMaybe<Scalars['String']>;
  username_Istartswith?: InputMaybe<Scalars['String']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RefreshToken = {
  __typename?: 'RefreshToken';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  payload?: Maybe<Scalars['GenericScalar']>;
  refreshToken?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

/**
 * Register user with fields defined in the settings.
 *
 * If the email field of the user model is part of the
 * registration fields (default), check if there is
 * no user with that email or as a secondary email.
 *
 * If it exists, it does not register the user,
 * even if the email field is not defined as unique
 * (default of the default django user model).
 *
 * When creating the user, it also creates a `UserStatus`
 * related to that user, making it possible to track
 * if the user is archived, verified and has a secondary
 * email.
 *
 * Send account verification email.
 *
 * If allowed to not verified users login, return token.
 */
export type Register = {
  __typename?: 'Register';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  refreshToken?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

/**
 * Sends activation email.
 *
 * It is called resend because theoretically
 * the first activation email was sent when
 * the user registered.
 *
 * If there is no user with the requested email,
 * a successful response is returned.
 */
export type ResendActivationEmail = {
  __typename?: 'ResendActivationEmail';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RevokeToken = {
  __typename?: 'RevokeToken';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  revoked?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
};

/**
 * Send password reset email.
 *
 * For non verified users, send an activation
 * email instead.
 *
 * Accepts both primary and secondary email.
 *
 * If there is no user with the requested email,
 * a successful response is returned.
 */
export type SendPasswordResetEmail = {
  __typename?: 'SendPasswordResetEmail';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

/**
 * Send activation to secondary email.
 *
 * User must be verified and confirm password.
 */
export type SendSecondaryEmailActivation = {
  __typename?: 'SendSecondaryEmailActivation';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

/**
 * Swap between primary and secondary emails.
 *
 * Require password confirmation.
 */
export type SwapEmails = {
  __typename?: 'SwapEmails';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type TestResultType = {
  __typename?: 'TestResultType';
  id: Scalars['ID'];
  patient: PatientType;
  testName: Scalars['String'];
  testResult: Scalars['String'];
};

/**
 * Update user model fields, defined on settings.
 *
 * User must be verified.
 */
export type UpdateAccount = {
  __typename?: 'UpdateAccount';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type UpdateHospitalResource = {
  __typename?: 'UpdateHospitalResource';
  hospitalResource?: Maybe<HospitalResourceType>;
  ok?: Maybe<Scalars['Boolean']>;
};

export type UpdateMedicinePrescription = {
  __typename?: 'UpdateMedicinePrescription';
  medp?: Maybe<MedicinePrescriptionType>;
};

export type UpdateMedicineRecord = {
  __typename?: 'UpdateMedicineRecord';
  medr?: Maybe<MedicineRecordType>;
};

export type UpdatePatient = {
  __typename?: 'UpdatePatient';
  patient?: Maybe<PatientType>;
};

export type UserNode = Node & {
  __typename?: 'UserNode';
  archived?: Maybe<Scalars['Boolean']>;
  dateJoined: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  hospital?: Maybe<HospitalType>;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName: Scalars['String'];
  pk?: Maybe<Scalars['Int']>;
  secondaryEmail?: Maybe<Scalars['String']>;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String'];
  verified?: Maybe<Scalars['Boolean']>;
};

export type UserNodeConnection = {
  __typename?: 'UserNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `UserNode` and its cursor. */
export type UserNodeEdge = {
  __typename?: 'UserNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<UserNode>;
};

export type UserType = {
  __typename?: 'UserType';
  dateJoined: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  hospital?: Maybe<HospitalType>;
  id: Scalars['ID'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean'];
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName: Scalars['String'];
  password: Scalars['String'];
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String'];
};

/**
 * Verify user account.
 *
 * Receive the token that was sent by email.
 * If the token is valid, make the user verified
 * by making the `user.status.verified` field true.
 */
export type VerifyAccount = {
  __typename?: 'VerifyAccount';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

/**
 * Verify user secondary email.
 *
 * Receive the token that was sent by email.
 * User is already verified when using this mutation.
 *
 * If the token is valid, add the secondary email
 * to `user.status.secondary_email` field.
 *
 * Note that until the secondary email is verified,
 * it has not been saved anywhere beyond the token,
 * so it can still be used to create a new account.
 * After being verified, it will no longer be available.
 */
export type VerifySecondaryEmail = {
  __typename?: 'VerifySecondaryEmail';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type VerifyToken = {
  __typename?: 'VerifyToken';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  payload?: Maybe<Scalars['GenericScalar']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', tokenAuth?: { __typename?: 'ObtainJSONWebToken', token?: string | null, success?: boolean | null, errors?: any | null, user?: { __typename?: 'UserNode', firstName: string, hospital?: { __typename?: 'HospitalType', name: string } | null } | null } | null };

export type CreatePatientMutationVariables = Exact<{
  aadhar: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
}>;


export type CreatePatientMutation = { __typename?: 'Mutation', createPatient?: { __typename?: 'CreatePatient', patient?: { __typename?: 'PatientType', id: string } | null } | null };

export type AddAuthorizedHospitalMutationVariables = Exact<{
  patientId: Scalars['String'];
}>;


export type AddAuthorizedHospitalMutation = { __typename?: 'Mutation', createPatientAuthorizedHospital?: { __typename?: 'CreatePatientAuthorizedHospital', ok?: boolean | null } | null };

export type RemoveAuthorizedHospitalMutationVariables = Exact<{
  patientId: Scalars['String'];
}>;


export type RemoveAuthorizedHospitalMutation = { __typename?: 'Mutation', deletePatientAuthorizedHospital?: { __typename?: 'DeletePatientAuthorizedHospital', ok?: boolean | null } | null };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', me?: { __typename?: 'UserNode', id: string, firstName: string, hospital?: { __typename?: 'HospitalType', name: string } | null } | null };

export type CreateMedicinePrescriptionMutationVariables = Exact<{
  doses?: InputMaybe<Scalars['String']>;
  medicine?: InputMaybe<Scalars['String']>;
}>;


export type CreateMedicinePrescriptionMutation = { __typename?: 'Mutation', createMedicinePrescription?: { __typename?: 'CreateMedicinePrescription', medp?: { __typename?: 'MedicinePrescriptionType', id: string } | null } | null };

export type CreateMedicineRecordMutationVariables = Exact<{
  patientId?: InputMaybe<Scalars['String']>;
  prescriptionId?: InputMaybe<Scalars['String']>;
}>;


export type CreateMedicineRecordMutation = { __typename?: 'Mutation', createMedicineRecord?: { __typename?: 'CreateMedicineRecord', medr?: { __typename?: 'MedicineRecordType', id: string } | null } | null };


export const LoginDocument = gql`
    mutation login($username: String!, $password: String!) {
  tokenAuth(username: $username, password: $password) {
    token
    success
    errors
    user {
      firstName
      hospital {
        name
      }
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const CreatePatientDocument = gql`
    mutation createPatient($aadhar: String!, $name: String!, $phone: String!) {
  createPatient(aadhar: $aadhar, name: $name, phone: $phone) {
    patient {
      id
    }
  }
}
    `;
export type CreatePatientMutationFn = Apollo.MutationFunction<CreatePatientMutation, CreatePatientMutationVariables>;

/**
 * __useCreatePatientMutation__
 *
 * To run a mutation, you first call `useCreatePatientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePatientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPatientMutation, { data, loading, error }] = useCreatePatientMutation({
 *   variables: {
 *      aadhar: // value for 'aadhar'
 *      name: // value for 'name'
 *      phone: // value for 'phone'
 *   },
 * });
 */
export function useCreatePatientMutation(baseOptions?: Apollo.MutationHookOptions<CreatePatientMutation, CreatePatientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePatientMutation, CreatePatientMutationVariables>(CreatePatientDocument, options);
      }
export type CreatePatientMutationHookResult = ReturnType<typeof useCreatePatientMutation>;
export type CreatePatientMutationResult = Apollo.MutationResult<CreatePatientMutation>;
export type CreatePatientMutationOptions = Apollo.BaseMutationOptions<CreatePatientMutation, CreatePatientMutationVariables>;
export const AddAuthorizedHospitalDocument = gql`
    mutation addAuthorizedHospital($patientId: String!) {
  createPatientAuthorizedHospital(patientId: $patientId) {
    ok
  }
}
    `;
export type AddAuthorizedHospitalMutationFn = Apollo.MutationFunction<AddAuthorizedHospitalMutation, AddAuthorizedHospitalMutationVariables>;

/**
 * __useAddAuthorizedHospitalMutation__
 *
 * To run a mutation, you first call `useAddAuthorizedHospitalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAuthorizedHospitalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAuthorizedHospitalMutation, { data, loading, error }] = useAddAuthorizedHospitalMutation({
 *   variables: {
 *      patientId: // value for 'patientId'
 *   },
 * });
 */
export function useAddAuthorizedHospitalMutation(baseOptions?: Apollo.MutationHookOptions<AddAuthorizedHospitalMutation, AddAuthorizedHospitalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddAuthorizedHospitalMutation, AddAuthorizedHospitalMutationVariables>(AddAuthorizedHospitalDocument, options);
      }
export type AddAuthorizedHospitalMutationHookResult = ReturnType<typeof useAddAuthorizedHospitalMutation>;
export type AddAuthorizedHospitalMutationResult = Apollo.MutationResult<AddAuthorizedHospitalMutation>;
export type AddAuthorizedHospitalMutationOptions = Apollo.BaseMutationOptions<AddAuthorizedHospitalMutation, AddAuthorizedHospitalMutationVariables>;
export const RemoveAuthorizedHospitalDocument = gql`
    mutation removeAuthorizedHospital($patientId: String!) {
  deletePatientAuthorizedHospital(patientId: $patientId) {
    ok
  }
}
    `;
export type RemoveAuthorizedHospitalMutationFn = Apollo.MutationFunction<RemoveAuthorizedHospitalMutation, RemoveAuthorizedHospitalMutationVariables>;

/**
 * __useRemoveAuthorizedHospitalMutation__
 *
 * To run a mutation, you first call `useRemoveAuthorizedHospitalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveAuthorizedHospitalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeAuthorizedHospitalMutation, { data, loading, error }] = useRemoveAuthorizedHospitalMutation({
 *   variables: {
 *      patientId: // value for 'patientId'
 *   },
 * });
 */
export function useRemoveAuthorizedHospitalMutation(baseOptions?: Apollo.MutationHookOptions<RemoveAuthorizedHospitalMutation, RemoveAuthorizedHospitalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveAuthorizedHospitalMutation, RemoveAuthorizedHospitalMutationVariables>(RemoveAuthorizedHospitalDocument, options);
      }
export type RemoveAuthorizedHospitalMutationHookResult = ReturnType<typeof useRemoveAuthorizedHospitalMutation>;
export type RemoveAuthorizedHospitalMutationResult = Apollo.MutationResult<RemoveAuthorizedHospitalMutation>;
export type RemoveAuthorizedHospitalMutationOptions = Apollo.BaseMutationOptions<RemoveAuthorizedHospitalMutation, RemoveAuthorizedHospitalMutationVariables>;
export const UserDocument = gql`
    query user {
  me {
    id
    firstName
    hospital {
      name
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const CreateMedicinePrescriptionDocument = gql`
    mutation createMedicinePrescription($doses: String, $medicine: String) {
  createMedicinePrescription(doses: $doses, medicine: $medicine) {
    medp {
      id
    }
  }
}
    `;
export type CreateMedicinePrescriptionMutationFn = Apollo.MutationFunction<CreateMedicinePrescriptionMutation, CreateMedicinePrescriptionMutationVariables>;

/**
 * __useCreateMedicinePrescriptionMutation__
 *
 * To run a mutation, you first call `useCreateMedicinePrescriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMedicinePrescriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMedicinePrescriptionMutation, { data, loading, error }] = useCreateMedicinePrescriptionMutation({
 *   variables: {
 *      doses: // value for 'doses'
 *      medicine: // value for 'medicine'
 *   },
 * });
 */
export function useCreateMedicinePrescriptionMutation(baseOptions?: Apollo.MutationHookOptions<CreateMedicinePrescriptionMutation, CreateMedicinePrescriptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMedicinePrescriptionMutation, CreateMedicinePrescriptionMutationVariables>(CreateMedicinePrescriptionDocument, options);
      }
export type CreateMedicinePrescriptionMutationHookResult = ReturnType<typeof useCreateMedicinePrescriptionMutation>;
export type CreateMedicinePrescriptionMutationResult = Apollo.MutationResult<CreateMedicinePrescriptionMutation>;
export type CreateMedicinePrescriptionMutationOptions = Apollo.BaseMutationOptions<CreateMedicinePrescriptionMutation, CreateMedicinePrescriptionMutationVariables>;
export const CreateMedicineRecordDocument = gql`
    mutation createMedicineRecord($patientId: String, $prescriptionId: String) {
  createMedicineRecord(patientId: $patientId, prescriptionId: $prescriptionId) {
    medr {
      id
    }
  }
}
    `;
export type CreateMedicineRecordMutationFn = Apollo.MutationFunction<CreateMedicineRecordMutation, CreateMedicineRecordMutationVariables>;

/**
 * __useCreateMedicineRecordMutation__
 *
 * To run a mutation, you first call `useCreateMedicineRecordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMedicineRecordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMedicineRecordMutation, { data, loading, error }] = useCreateMedicineRecordMutation({
 *   variables: {
 *      patientId: // value for 'patientId'
 *      prescriptionId: // value for 'prescriptionId'
 *   },
 * });
 */
export function useCreateMedicineRecordMutation(baseOptions?: Apollo.MutationHookOptions<CreateMedicineRecordMutation, CreateMedicineRecordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMedicineRecordMutation, CreateMedicineRecordMutationVariables>(CreateMedicineRecordDocument, options);
      }
export type CreateMedicineRecordMutationHookResult = ReturnType<typeof useCreateMedicineRecordMutation>;
export type CreateMedicineRecordMutationResult = Apollo.MutationResult<CreateMedicineRecordMutation>;
export type CreateMedicineRecordMutationOptions = Apollo.BaseMutationOptions<CreateMedicineRecordMutation, CreateMedicineRecordMutationVariables>;