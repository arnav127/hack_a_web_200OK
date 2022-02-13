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

export type ChangeDoctorPatientAssignedStatus = {
  __typename?: 'ChangeDoctorPatientAssignedStatus';
  doctorPatientAssigned?: Maybe<DoctorPatientAssignedType>;
  ok?: Maybe<Scalars['Boolean']>;
};

export type CreateDoctor = {
  __typename?: 'CreateDoctor';
  doctor?: Maybe<DoctorType>;
  ok?: Maybe<Scalars['Boolean']>;
};

export type CreateDoctorNotes = {
  __typename?: 'CreateDoctorNotes';
  doctorNotes?: Maybe<DoctorNotesType>;
};

export type CreateDoctorPatientAssigned = {
  __typename?: 'CreateDoctorPatientAssigned';
  doctorPatientAssigned?: Maybe<DoctorPatientAssignedType>;
  ok?: Maybe<Scalars['Boolean']>;
};

export type CreateHospitalResource = {
  __typename?: 'CreateHospitalResource';
  hospitalResource?: Maybe<HospitalResourceType>;
  ok?: Maybe<Scalars['Boolean']>;
};

export type CreateMedicinePrescription = {
  __typename?: 'CreateMedicinePrescription';
  medicinePrescription?: Maybe<MedicinePrescriptionType>;
};

export type CreateMedicineRecord = {
  __typename?: 'CreateMedicineRecord';
  medicineRecord?: Maybe<MedicineRecordType>;
};

export type CreatePatient = {
  __typename?: 'CreatePatient';
  patient?: Maybe<PatientType>;
};

export type CreatePatientAuthorizedHospital = {
  __typename?: 'CreatePatientAuthorizedHospital';
  ok?: Maybe<Scalars['Boolean']>;
  patientAuthorizedHospital?: Maybe<PatientAuthorizedHospitalType>;
};

export type CreateReferredPatient = {
  __typename?: 'CreateReferredPatient';
  ok?: Maybe<Scalars['Boolean']>;
  referredPatient?: Maybe<ReferredPatientsType>;
};

export type CreateTestResult = {
  __typename?: 'CreateTestResult';
  testResult?: Maybe<TestResultType>;
};

export type DecrementHospitalResource = {
  __typename?: 'DecrementHospitalResource';
  hospitalResource?: Maybe<HospitalResourceType>;
  ok?: Maybe<Scalars['Boolean']>;
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

export type DischargePatient = {
  __typename?: 'DischargePatient';
  ok?: Maybe<Scalars['Boolean']>;
};

export type DiseaseInfoType = {
  __typename?: 'DiseaseInfoType';
  causes: Scalars['String'];
  id: Scalars['ID'];
  link: Scalars['String'];
  medication: Scalars['String'];
  name: Scalars['String'];
  overview: Scalars['String'];
  prevention: Scalars['String'];
  riskFactor: Scalars['String'];
  symptoms: Scalars['String'];
  treatment: Scalars['String'];
};

export type DoctorNotesType = {
  __typename?: 'DoctorNotesType';
  diagnosis: Scalars['String'];
  doctor: DoctorType;
  id: Scalars['ID'];
  notes: Scalars['String'];
  patient: PatientType;
  predictedDisease: Scalars['String'];
};

export type DoctorPatientAssignedType = {
  __typename?: 'DoctorPatientAssignedType';
  assignedAt: Scalars['DateTime'];
  doctor: DoctorType;
  id: Scalars['ID'];
  patient: PatientType;
  status: Scalars['String'];
};

export type DoctorType = {
  __typename?: 'DoctorType';
  doctornotesSet: Array<DoctorNotesType>;
  doctorpatientassignedSet: Array<DoctorPatientAssignedType>;
  hospital: HospitalType;
  id: Scalars['ID'];
  name: Scalars['String'];
  specialization: Scalars['String'];
  user: UserType;
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
  doctorSet: Array<DoctorType>;
  hospitalresource?: Maybe<HospitalResourceType>;
  id: Scalars['ID'];
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  patientauthorizedhospitalSet: Array<PatientAuthorizedHospitalType>;
  phone: Scalars['String'];
  referredIn: Array<ReferredPatientsType>;
  referredOut: Array<ReferredPatientsType>;
  user: UserType;
};

export type IncrementHospitalResource = {
  __typename?: 'IncrementHospitalResource';
  hospitalResource?: Maybe<HospitalResourceType>;
  ok?: Maybe<Scalars['Boolean']>;
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
  prescription: Scalars['String'];
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
  changeDoctorPatientAssignedStatus?: Maybe<ChangeDoctorPatientAssignedStatus>;
  createDoctor?: Maybe<CreateDoctor>;
  createDoctorNotes?: Maybe<CreateDoctorNotes>;
  createDoctorPatientAssigned?: Maybe<CreateDoctorPatientAssigned>;
  createHospitalResource?: Maybe<CreateHospitalResource>;
  createMedicinePrescription?: Maybe<CreateMedicinePrescription>;
  createMedicineRecord?: Maybe<CreateMedicineRecord>;
  createPatient?: Maybe<CreatePatient>;
  createPatientAuthorizedHospital?: Maybe<CreatePatientAuthorizedHospital>;
  createReferredPatient?: Maybe<CreateReferredPatient>;
  createTestResult?: Maybe<CreateTestResult>;
  decrementHospitalResource?: Maybe<DecrementHospitalResource>;
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
  dischargePatient?: Maybe<DischargePatient>;
  incrementHospitalResource?: Maybe<IncrementHospitalResource>;
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
  referPatient?: Maybe<ReferPatient>;
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
  updateDoctorNotes?: Maybe<UpdateDoctorNotes>;
  updateDoctorPatientAssigned?: Maybe<UpdateDoctorPatientAssigned>;
  updateHospitalResource?: Maybe<UpdateHospitalResource>;
  updateMedicinePrescription?: Maybe<UpdateMedicinePrescription>;
  updateMedicineRecord?: Maybe<UpdateMedicineRecord>;
  updatePatient?: Maybe<UpdatePatient>;
  updateTestResult?: Maybe<UpdateTestResult>;
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


export type MutationChangeDoctorPatientAssignedStatusArgs = {
  doctorId: Scalars['String'];
  newStatus: Scalars['String'];
  patientId: Scalars['String'];
};


export type MutationCreateDoctorArgs = {
  name?: InputMaybe<Scalars['String']>;
  specialization?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type MutationCreateDoctorNotesArgs = {
  diagnosis?: InputMaybe<Scalars['String']>;
  doctor?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  patientId?: InputMaybe<Scalars['String']>;
};


export type MutationCreateDoctorPatientAssignedArgs = {
  doctorId: Scalars['String'];
  patientId: Scalars['String'];
  status?: InputMaybe<Scalars['String']>;
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
  prescription?: InputMaybe<Scalars['String']>;
};


export type MutationCreatePatientArgs = {
  aadhar: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
};


export type MutationCreatePatientAuthorizedHospitalArgs = {
  patientId?: InputMaybe<Scalars['String']>;
};


export type MutationCreateReferredPatientArgs = {
  hospitalReferred?: InputMaybe<Scalars['String']>;
  patient?: InputMaybe<Scalars['String']>;
  reason?: InputMaybe<Scalars['String']>;
};


export type MutationCreateTestResultArgs = {
  media?: InputMaybe<Scalars['String']>;
  patientId?: InputMaybe<Scalars['String']>;
  testName?: InputMaybe<Scalars['String']>;
  testResult?: InputMaybe<Scalars['String']>;
};


export type MutationDecrementHospitalResourceArgs = {
  resource?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteAccountArgs = {
  password: Scalars['String'];
};


export type MutationDeletePatientAuthorizedHospitalArgs = {
  patientId?: InputMaybe<Scalars['String']>;
};


export type MutationDischargePatientArgs = {
  patient?: InputMaybe<Scalars['String']>;
};


export type MutationIncrementHospitalResourceArgs = {
  resource?: InputMaybe<Scalars['String']>;
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


export type MutationReferPatientArgs = {
  patient?: InputMaybe<Scalars['String']>;
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


export type MutationUpdateDoctorNotesArgs = {
  diagnosis?: InputMaybe<Scalars['String']>;
  doctor?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  notes?: InputMaybe<Scalars['String']>;
  patientId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateDoctorPatientAssignedArgs = {
  id: Scalars['String'];
  newStatus: Scalars['String'];
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
  prescription?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePatientArgs = {
  aadhar?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateTestResultArgs = {
  id: Scalars['String'];
  media?: InputMaybe<Scalars['String']>;
  patient?: InputMaybe<Scalars['String']>;
  testName?: InputMaybe<Scalars['String']>;
  testResult?: InputMaybe<Scalars['String']>;
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
  doctornotesSet: Array<DoctorNotesType>;
  doctorpatientassignedSet: Array<DoctorPatientAssignedType>;
  id: Scalars['ID'];
  medicinerecordSet: Array<MedicineRecordType>;
  name: Scalars['String'];
  patientauthorizedhospitalSet: Array<PatientAuthorizedHospitalType>;
  phone: Scalars['String'];
  referredpatientsSet: Array<ReferredPatientsType>;
  testresultSet: Array<TestResultType>;
};

export type Query = {
  __typename?: 'Query';
  allDoctorPatientAssigned?: Maybe<Array<Maybe<DoctorPatientAssignedType>>>;
  allDoctors?: Maybe<Array<Maybe<DoctorType>>>;
  allHospitalResources?: Maybe<Array<Maybe<HospitalResourceType>>>;
  allHospitals?: Maybe<Array<Maybe<HospitalType>>>;
  currentHospitalResource?: Maybe<HospitalResourceType>;
  diseaseInfo?: Maybe<Array<Maybe<DiseaseInfoType>>>;
  doctor?: Maybe<DoctorType>;
  doctorNotes?: Maybe<Array<Maybe<DoctorNotesType>>>;
  doctorPatientAssigned?: Maybe<Array<Maybe<DoctorPatientAssignedType>>>;
  hospital?: Maybe<HospitalType>;
  hospitalResource?: Maybe<HospitalResourceType>;
  latestDoctorNotes?: Maybe<DoctorNotesType>;
  latestMedicineRecords?: Maybe<MedicineRecordType>;
  me?: Maybe<UserNode>;
  medicinePrescription?: Maybe<Array<Maybe<MedicinePrescriptionType>>>;
  medicineRecords?: Maybe<Array<Maybe<MedicineRecordType>>>;
  patient?: Maybe<PatientType>;
  patientsAdmitted?: Maybe<Array<Maybe<PatientAuthorizedHospitalType>>>;
  patientsAll?: Maybe<Array<Maybe<PatientType>>>;
  referredInPatients?: Maybe<Array<Maybe<ReferredPatientsType>>>;
  referredOutPatients?: Maybe<Array<Maybe<ReferredPatientsType>>>;
  testResult?: Maybe<Array<Maybe<TestResultType>>>;
  user?: Maybe<UserNode>;
  users?: Maybe<UserNodeConnection>;
};


export type QueryDiseaseInfoArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type QueryDoctorArgs = {
  id?: InputMaybe<Scalars['String']>;
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
  id?: InputMaybe<Scalars['String']>;
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

export type ReferPatient = {
  __typename?: 'ReferPatient';
  ok?: Maybe<Scalars['Boolean']>;
};

export type ReferredPatientsType = {
  __typename?: 'ReferredPatientsType';
  hospitalReferred: HospitalType;
  hospitalReferredBy: HospitalType;
  id: Scalars['ID'];
  patient: PatientType;
  reasonReferred: Scalars['String'];
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
  media: Scalars['String'];
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

export type UpdateDoctorNotes = {
  __typename?: 'UpdateDoctorNotes';
  doctorNotes?: Maybe<DoctorNotesType>;
};

export type UpdateDoctorPatientAssigned = {
  __typename?: 'UpdateDoctorPatientAssigned';
  doctorPatientAssigned?: Maybe<DoctorPatientAssignedType>;
  ok?: Maybe<Scalars['Boolean']>;
};

export type UpdateHospitalResource = {
  __typename?: 'UpdateHospitalResource';
  hospitalResource?: Maybe<HospitalResourceType>;
  ok?: Maybe<Scalars['Boolean']>;
};

export type UpdateMedicinePrescription = {
  __typename?: 'UpdateMedicinePrescription';
  medicinePrescription?: Maybe<MedicinePrescriptionType>;
};

export type UpdateMedicineRecord = {
  __typename?: 'UpdateMedicineRecord';
  medicineRecord?: Maybe<MedicineRecordType>;
};

export type UpdatePatient = {
  __typename?: 'UpdatePatient';
  patient?: Maybe<PatientType>;
};

export type UpdateTestResult = {
  __typename?: 'UpdateTestResult';
  testResult?: Maybe<TestResultType>;
};

export type UserNode = Node & {
  __typename?: 'UserNode';
  archived?: Maybe<Scalars['Boolean']>;
  dateJoined: Scalars['DateTime'];
  doctor?: Maybe<DoctorType>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  hospital?: Maybe<HospitalType>;
  /** The ID of the object. */
  id: Scalars['ID'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  isDoctor: Scalars['Boolean'];
  isHospital: Scalars['Boolean'];
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
  doctor?: Maybe<DoctorType>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  hospital?: Maybe<HospitalType>;
  id: Scalars['ID'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  isDoctor: Scalars['Boolean'];
  isHospital: Scalars['Boolean'];
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

export type CreateDoctorPatientAssignedMutationVariables = Exact<{
  doctorId: Scalars['String'];
  patientId: Scalars['String'];
  status?: InputMaybe<Scalars['String']>;
}>;


export type CreateDoctorPatientAssignedMutation = { __typename?: 'Mutation', createDoctorPatientAssigned?: { __typename?: 'CreateDoctorPatientAssigned', ok?: boolean | null, doctorPatientAssigned?: { __typename?: 'DoctorPatientAssignedType', id: string } | null } | null };

export type ChangeDoctorPatientAssignedStatusMutationVariables = Exact<{
  doctorId: Scalars['String'];
  newStatus: Scalars['String'];
  patientId: Scalars['String'];
}>;


export type ChangeDoctorPatientAssignedStatusMutation = { __typename?: 'Mutation', changeDoctorPatientAssignedStatus?: { __typename?: 'ChangeDoctorPatientAssignedStatus', ok?: boolean | null, doctorPatientAssigned?: { __typename?: 'DoctorPatientAssignedType', id: string, status: string } | null } | null };

export type UpdateDoctorPatientAssignedMutationVariables = Exact<{
  id: Scalars['String'];
  newStatus: Scalars['String'];
}>;


export type UpdateDoctorPatientAssignedMutation = { __typename?: 'Mutation', updateDoctorPatientAssigned?: { __typename?: 'UpdateDoctorPatientAssigned', ok?: boolean | null, doctorPatientAssigned?: { __typename?: 'DoctorPatientAssignedType', id: string, status: string } | null } | null };

export type AllDoctorsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllDoctorsQuery = { __typename?: 'Query', me?: { __typename?: 'UserNode', doctor?: { __typename?: 'DoctorType', name: string, hospital: { __typename?: 'HospitalType', doctorSet: Array<{ __typename?: 'DoctorType', id: string, name: string, specialization: string }> } } | null, hospital?: { __typename?: 'HospitalType', doctorSet: Array<{ __typename?: 'DoctorType', id: string, name: string, specialization: string }> } | null } | null };

export type AssignedPatientsQueryVariables = Exact<{ [key: string]: never; }>;


export type AssignedPatientsQuery = { __typename?: 'Query', doctorPatientAssigned?: Array<{ __typename?: 'DoctorPatientAssignedType', patient: { __typename?: 'PatientType', id: string, name: string, phone: string, doctorpatientassignedSet: Array<{ __typename?: 'DoctorPatientAssignedType', assignedAt: any, status: string }>, doctornotesSet: Array<{ __typename?: 'DoctorNotesType', diagnosis: string }> } } | null> | null };

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', tokenAuth?: { __typename?: 'ObtainJSONWebToken', token?: string | null, success?: boolean | null, errors?: any | null, user?: { __typename?: 'UserNode', firstName: string, isHospital: boolean, isDoctor: boolean, hospital?: { __typename?: 'HospitalType', id: string, name: string } | null, doctor?: { __typename?: 'DoctorType', id: string, name: string, hospital: { __typename?: 'HospitalType', name: string } } | null } | null } | null };

export type CreatePatientAuthorizedHospitalMutationVariables = Exact<{
  patientId?: InputMaybe<Scalars['String']>;
}>;


export type CreatePatientAuthorizedHospitalMutation = { __typename?: 'Mutation', createPatientAuthorizedHospital?: { __typename?: 'CreatePatientAuthorizedHospital', ok?: boolean | null, patientAuthorizedHospital?: { __typename?: 'PatientAuthorizedHospitalType', id: string, patientId: { __typename?: 'PatientType', id: string }, hospitalId: { __typename?: 'HospitalType', id: string } } | null } | null };

export type DeletePatientAuthorizedHospitalMutationVariables = Exact<{
  patientId?: InputMaybe<Scalars['String']>;
}>;


export type DeletePatientAuthorizedHospitalMutation = { __typename?: 'Mutation', deletePatientAuthorizedHospital?: { __typename?: 'DeletePatientAuthorizedHospital', ok?: boolean | null } | null };

export type IncrementHospitalResourceMutationVariables = Exact<{
  resource?: InputMaybe<Scalars['String']>;
}>;


export type IncrementHospitalResourceMutation = { __typename?: 'Mutation', incrementHospitalResource?: { __typename?: 'IncrementHospitalResource', ok?: boolean | null } | null };

export type DecrementHospitalResourceMutationVariables = Exact<{
  resource?: InputMaybe<Scalars['String']>;
}>;


export type DecrementHospitalResourceMutation = { __typename?: 'Mutation', decrementHospitalResource?: { __typename?: 'DecrementHospitalResource', ok?: boolean | null } | null };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', me?: { __typename?: 'UserNode', id: string, firstName: string, hospital?: { __typename?: 'HospitalType', name: string } | null } | null };

export type AdmittedRecordsQueryVariables = Exact<{ [key: string]: never; }>;


export type AdmittedRecordsQuery = { __typename?: 'Query', me?: { __typename?: 'UserNode', hospital?: { __typename?: 'HospitalType', patientauthorizedhospitalSet: Array<{ __typename?: 'PatientAuthorizedHospitalType', patientId: { __typename?: 'PatientType', id: string, name: string, phone: string, doctorpatientassignedSet: Array<{ __typename?: 'DoctorPatientAssignedType', assignedAt: any, status: string, doctor: { __typename?: 'DoctorType', id: string, name: string } }>, doctornotesSet: Array<{ __typename?: 'DoctorNotesType', diagnosis: string }> } }> } | null } | null };

export type HospitalResourcesFragment = { __typename?: 'HospitalResourceType', id: string, bedCapacity: number, bedAvailable: number, ventilatorCapacity: number, ventilatorAvailable: number, icuCapacity: number, icuAvailable: number, bloodTest: boolean, urineTest: boolean, xray: boolean, ultrasound: boolean, mri: boolean, ecg: boolean, eeg: boolean, ekg: boolean, catscan: boolean, mammogram: boolean, colonoscopy: boolean };

export type CurrentHospitalResourcesQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentHospitalResourcesQuery = { __typename?: 'Query', currentHospitalResource?: { __typename?: 'HospitalResourceType', id: string, bedCapacity: number, bedAvailable: number, ventilatorCapacity: number, ventilatorAvailable: number, icuCapacity: number, icuAvailable: number, bloodTest: boolean, urineTest: boolean, xray: boolean, ultrasound: boolean, mri: boolean, ecg: boolean, eeg: boolean, ekg: boolean, catscan: boolean, mammogram: boolean, colonoscopy: boolean } | null };

export type AllHospitalsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllHospitalsQuery = { __typename?: 'Query', allHospitals?: Array<{ __typename?: 'HospitalType', name: string, address: string, phone: string, longitude?: number | null, latitude?: number | null, hospitalresource?: { __typename?: 'HospitalResourceType', id: string, bedCapacity: number, bedAvailable: number, ventilatorCapacity: number, ventilatorAvailable: number, icuCapacity: number, icuAvailable: number, bloodTest: boolean, urineTest: boolean, xray: boolean, ultrasound: boolean, mri: boolean, ecg: boolean, eeg: boolean, ekg: boolean, catscan: boolean, mammogram: boolean, colonoscopy: boolean } | null } | null> | null };

export type CreatePatientMutationVariables = Exact<{
  name: Scalars['String'];
  phone: Scalars['String'];
  aadhar: Scalars['String'];
}>;


export type CreatePatientMutation = { __typename?: 'Mutation', createPatient?: { __typename?: 'CreatePatient', patient?: { __typename?: 'PatientType', id: string, name: string, phone: string, aadhar: string } | null } | null };

export type PatientByAadharQueryVariables = Exact<{
  phone?: InputMaybe<Scalars['String']>;
  aadhar?: InputMaybe<Scalars['String']>;
}>;


export type PatientByAadharQuery = { __typename?: 'Query', patient?: { __typename?: 'PatientType', id: string, name: string, phone: string, aadhar: string, patientauthorizedhospitalSet: Array<{ __typename?: 'PatientAuthorizedHospitalType', hospitalId: { __typename?: 'HospitalType', id: string, name: string } }> } | null };

export type PatientByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type PatientByIdQuery = { __typename?: 'Query', patient?: { __typename?: 'PatientType', id: string, name: string, phone: string, doctorpatientassignedSet: Array<{ __typename?: 'DoctorPatientAssignedType', id: string, status: string, assignedAt: any, doctor: { __typename?: 'DoctorType', name: string } }>, doctornotesSet: Array<{ __typename?: 'DoctorNotesType', diagnosis: string, notes: string }>, medicinerecordSet: Array<{ __typename?: 'MedicineRecordType', id: string, prescription: string }>, testresultSet: Array<{ __typename?: 'TestResultType', id: string, testName: string, testResult: string, media: string }> } | null };

export type DischargePatientMutationVariables = Exact<{
  patient?: InputMaybe<Scalars['String']>;
}>;


export type DischargePatientMutation = { __typename?: 'Mutation', dischargePatient?: { __typename?: 'DischargePatient', ok?: boolean | null } | null };

export type ReferPatientMutationVariables = Exact<{
  patient?: InputMaybe<Scalars['String']>;
}>;


export type ReferPatientMutation = { __typename?: 'Mutation', referPatient?: { __typename?: 'ReferPatient', ok?: boolean | null } | null };

export type CreateTestResultMutationVariables = Exact<{
  media?: InputMaybe<Scalars['String']>;
  patientId?: InputMaybe<Scalars['String']>;
  testName?: InputMaybe<Scalars['String']>;
  testResult?: InputMaybe<Scalars['String']>;
}>;


export type CreateTestResultMutation = { __typename?: 'Mutation', createTestResult?: { __typename?: 'CreateTestResult', testResult?: { __typename?: 'TestResultType', id: string, media: string, testName: string } | null } | null };

export type UpdateTestResultMutationVariables = Exact<{
  id: Scalars['String'];
  patient?: InputMaybe<Scalars['String']>;
  testName?: InputMaybe<Scalars['String']>;
  testResult?: InputMaybe<Scalars['String']>;
}>;


export type UpdateTestResultMutation = { __typename?: 'Mutation', updateTestResult?: { __typename?: 'UpdateTestResult', testResult?: { __typename?: 'TestResultType', id: string, testName: string, testResult: string, patient: { __typename?: 'PatientType', id: string } } | null } | null };

export type CreateDoctorNotesMutationVariables = Exact<{
  diagnosis?: InputMaybe<Scalars['String']>;
  doctor?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  patientId?: InputMaybe<Scalars['String']>;
}>;


export type CreateDoctorNotesMutation = { __typename?: 'Mutation', createDoctorNotes?: { __typename?: 'CreateDoctorNotes', doctorNotes?: { __typename?: 'DoctorNotesType', id: string, diagnosis: string, notes: string, patient: { __typename?: 'PatientType', id: string }, doctor: { __typename?: 'DoctorType', id: string } } | null } | null };

export type UpdateDoctorNotesMutationVariables = Exact<{
  id: Scalars['String'];
  diagnosis?: InputMaybe<Scalars['String']>;
  doctor?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  patientId?: InputMaybe<Scalars['String']>;
}>;


export type UpdateDoctorNotesMutation = { __typename?: 'Mutation', updateDoctorNotes?: { __typename?: 'UpdateDoctorNotes', doctorNotes?: { __typename?: 'DoctorNotesType', id: string, diagnosis: string, notes: string, patient: { __typename?: 'PatientType', id: string }, doctor: { __typename?: 'DoctorType', id: string } } | null } | null };

export type CreateMedicineRecordMutationVariables = Exact<{
  patientId?: InputMaybe<Scalars['String']>;
  prescription?: InputMaybe<Scalars['String']>;
}>;


export type CreateMedicineRecordMutation = { __typename?: 'Mutation', createMedicineRecord?: { __typename?: 'CreateMedicineRecord', medicineRecord?: { __typename?: 'MedicineRecordType', id: string, prescription: string, patient: { __typename?: 'PatientType', id: string } } | null } | null };

export type UpdateMedicineRecordMutationVariables = Exact<{
  id: Scalars['String'];
  patientId?: InputMaybe<Scalars['String']>;
  prescription?: InputMaybe<Scalars['String']>;
}>;


export type UpdateMedicineRecordMutation = { __typename?: 'Mutation', updateMedicineRecord?: { __typename?: 'UpdateMedicineRecord', medicineRecord?: { __typename?: 'MedicineRecordType', id: string, prescription: string, patient: { __typename?: 'PatientType', id: string } } | null } | null };

export type CreateMedicinePrescriptionMutationVariables = Exact<{
  doses: Scalars['String'];
  medicine: Scalars['String'];
}>;


export type CreateMedicinePrescriptionMutation = { __typename?: 'Mutation', createMedicinePrescription?: { __typename?: 'CreateMedicinePrescription', medicinePrescription?: { __typename?: 'MedicinePrescriptionType', id: string, medicine: string, doses: string } | null } | null };

export const HospitalResourcesFragmentDoc = gql`
    fragment hospitalResources on HospitalResourceType {
  id
  bedCapacity
  bedAvailable
  ventilatorCapacity
  ventilatorAvailable
  icuCapacity
  icuAvailable
  bloodTest
  urineTest
  xray
  ultrasound
  mri
  ecg
  eeg
  ekg
  catscan
  mammogram
  colonoscopy
}
    `;
export const CreateDoctorPatientAssignedDocument = gql`
    mutation createDoctorPatientAssigned($doctorId: String!, $patientId: String!, $status: String) {
  createDoctorPatientAssigned(
    doctorId: $doctorId
    patientId: $patientId
    status: $status
  ) {
    ok
    doctorPatientAssigned {
      id
    }
  }
}
    `;
export type CreateDoctorPatientAssignedMutationFn = Apollo.MutationFunction<CreateDoctorPatientAssignedMutation, CreateDoctorPatientAssignedMutationVariables>;

/**
 * __useCreateDoctorPatientAssignedMutation__
 *
 * To run a mutation, you first call `useCreateDoctorPatientAssignedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDoctorPatientAssignedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDoctorPatientAssignedMutation, { data, loading, error }] = useCreateDoctorPatientAssignedMutation({
 *   variables: {
 *      doctorId: // value for 'doctorId'
 *      patientId: // value for 'patientId'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useCreateDoctorPatientAssignedMutation(baseOptions?: Apollo.MutationHookOptions<CreateDoctorPatientAssignedMutation, CreateDoctorPatientAssignedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDoctorPatientAssignedMutation, CreateDoctorPatientAssignedMutationVariables>(CreateDoctorPatientAssignedDocument, options);
      }
export type CreateDoctorPatientAssignedMutationHookResult = ReturnType<typeof useCreateDoctorPatientAssignedMutation>;
export type CreateDoctorPatientAssignedMutationResult = Apollo.MutationResult<CreateDoctorPatientAssignedMutation>;
export type CreateDoctorPatientAssignedMutationOptions = Apollo.BaseMutationOptions<CreateDoctorPatientAssignedMutation, CreateDoctorPatientAssignedMutationVariables>;
export const ChangeDoctorPatientAssignedStatusDocument = gql`
    mutation changeDoctorPatientAssignedStatus($doctorId: String!, $newStatus: String!, $patientId: String!) {
  changeDoctorPatientAssignedStatus(
    doctorId: $doctorId
    newStatus: $newStatus
    patientId: $patientId
  ) {
    ok
    doctorPatientAssigned {
      id
      status
    }
  }
}
    `;
export type ChangeDoctorPatientAssignedStatusMutationFn = Apollo.MutationFunction<ChangeDoctorPatientAssignedStatusMutation, ChangeDoctorPatientAssignedStatusMutationVariables>;

/**
 * __useChangeDoctorPatientAssignedStatusMutation__
 *
 * To run a mutation, you first call `useChangeDoctorPatientAssignedStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeDoctorPatientAssignedStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeDoctorPatientAssignedStatusMutation, { data, loading, error }] = useChangeDoctorPatientAssignedStatusMutation({
 *   variables: {
 *      doctorId: // value for 'doctorId'
 *      newStatus: // value for 'newStatus'
 *      patientId: // value for 'patientId'
 *   },
 * });
 */
export function useChangeDoctorPatientAssignedStatusMutation(baseOptions?: Apollo.MutationHookOptions<ChangeDoctorPatientAssignedStatusMutation, ChangeDoctorPatientAssignedStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeDoctorPatientAssignedStatusMutation, ChangeDoctorPatientAssignedStatusMutationVariables>(ChangeDoctorPatientAssignedStatusDocument, options);
      }
export type ChangeDoctorPatientAssignedStatusMutationHookResult = ReturnType<typeof useChangeDoctorPatientAssignedStatusMutation>;
export type ChangeDoctorPatientAssignedStatusMutationResult = Apollo.MutationResult<ChangeDoctorPatientAssignedStatusMutation>;
export type ChangeDoctorPatientAssignedStatusMutationOptions = Apollo.BaseMutationOptions<ChangeDoctorPatientAssignedStatusMutation, ChangeDoctorPatientAssignedStatusMutationVariables>;
export const UpdateDoctorPatientAssignedDocument = gql`
    mutation updateDoctorPatientAssigned($id: String!, $newStatus: String!) {
  updateDoctorPatientAssigned(id: $id, newStatus: $newStatus) {
    ok
    doctorPatientAssigned {
      id
      status
    }
  }
}
    `;
export type UpdateDoctorPatientAssignedMutationFn = Apollo.MutationFunction<UpdateDoctorPatientAssignedMutation, UpdateDoctorPatientAssignedMutationVariables>;

/**
 * __useUpdateDoctorPatientAssignedMutation__
 *
 * To run a mutation, you first call `useUpdateDoctorPatientAssignedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDoctorPatientAssignedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDoctorPatientAssignedMutation, { data, loading, error }] = useUpdateDoctorPatientAssignedMutation({
 *   variables: {
 *      id: // value for 'id'
 *      newStatus: // value for 'newStatus'
 *   },
 * });
 */
export function useUpdateDoctorPatientAssignedMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDoctorPatientAssignedMutation, UpdateDoctorPatientAssignedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDoctorPatientAssignedMutation, UpdateDoctorPatientAssignedMutationVariables>(UpdateDoctorPatientAssignedDocument, options);
      }
export type UpdateDoctorPatientAssignedMutationHookResult = ReturnType<typeof useUpdateDoctorPatientAssignedMutation>;
export type UpdateDoctorPatientAssignedMutationResult = Apollo.MutationResult<UpdateDoctorPatientAssignedMutation>;
export type UpdateDoctorPatientAssignedMutationOptions = Apollo.BaseMutationOptions<UpdateDoctorPatientAssignedMutation, UpdateDoctorPatientAssignedMutationVariables>;
export const AllDoctorsDocument = gql`
    query allDoctors {
  me {
    doctor {
      name
      hospital {
        doctorSet {
          id
          name
          specialization
        }
      }
    }
    hospital {
      doctorSet {
        id
        name
        specialization
      }
    }
  }
}
    `;

/**
 * __useAllDoctorsQuery__
 *
 * To run a query within a React component, call `useAllDoctorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllDoctorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllDoctorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllDoctorsQuery(baseOptions?: Apollo.QueryHookOptions<AllDoctorsQuery, AllDoctorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllDoctorsQuery, AllDoctorsQueryVariables>(AllDoctorsDocument, options);
      }
export function useAllDoctorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllDoctorsQuery, AllDoctorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllDoctorsQuery, AllDoctorsQueryVariables>(AllDoctorsDocument, options);
        }
export type AllDoctorsQueryHookResult = ReturnType<typeof useAllDoctorsQuery>;
export type AllDoctorsLazyQueryHookResult = ReturnType<typeof useAllDoctorsLazyQuery>;
export type AllDoctorsQueryResult = Apollo.QueryResult<AllDoctorsQuery, AllDoctorsQueryVariables>;
export const AssignedPatientsDocument = gql`
    query assignedPatients {
  doctorPatientAssigned {
    patient {
      id
      name
      phone
      doctorpatientassignedSet {
        assignedAt
        status
      }
      doctornotesSet {
        diagnosis
      }
    }
  }
}
    `;

/**
 * __useAssignedPatientsQuery__
 *
 * To run a query within a React component, call `useAssignedPatientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAssignedPatientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAssignedPatientsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAssignedPatientsQuery(baseOptions?: Apollo.QueryHookOptions<AssignedPatientsQuery, AssignedPatientsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AssignedPatientsQuery, AssignedPatientsQueryVariables>(AssignedPatientsDocument, options);
      }
export function useAssignedPatientsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AssignedPatientsQuery, AssignedPatientsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AssignedPatientsQuery, AssignedPatientsQueryVariables>(AssignedPatientsDocument, options);
        }
export type AssignedPatientsQueryHookResult = ReturnType<typeof useAssignedPatientsQuery>;
export type AssignedPatientsLazyQueryHookResult = ReturnType<typeof useAssignedPatientsLazyQuery>;
export type AssignedPatientsQueryResult = Apollo.QueryResult<AssignedPatientsQuery, AssignedPatientsQueryVariables>;
export const LoginDocument = gql`
    mutation login($username: String!, $password: String!) {
  tokenAuth(username: $username, password: $password) {
    token
    success
    errors
    user {
      firstName
      hospital {
        id
        name
      }
      doctor {
        id
        name
        hospital {
          name
        }
      }
      isHospital
      isDoctor
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
export const CreatePatientAuthorizedHospitalDocument = gql`
    mutation createPatientAuthorizedHospital($patientId: String) {
  createPatientAuthorizedHospital(patientId: $patientId) {
    ok
    patientAuthorizedHospital {
      id
      patientId {
        id
      }
      hospitalId {
        id
      }
    }
  }
}
    `;
export type CreatePatientAuthorizedHospitalMutationFn = Apollo.MutationFunction<CreatePatientAuthorizedHospitalMutation, CreatePatientAuthorizedHospitalMutationVariables>;

/**
 * __useCreatePatientAuthorizedHospitalMutation__
 *
 * To run a mutation, you first call `useCreatePatientAuthorizedHospitalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePatientAuthorizedHospitalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPatientAuthorizedHospitalMutation, { data, loading, error }] = useCreatePatientAuthorizedHospitalMutation({
 *   variables: {
 *      patientId: // value for 'patientId'
 *   },
 * });
 */
export function useCreatePatientAuthorizedHospitalMutation(baseOptions?: Apollo.MutationHookOptions<CreatePatientAuthorizedHospitalMutation, CreatePatientAuthorizedHospitalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePatientAuthorizedHospitalMutation, CreatePatientAuthorizedHospitalMutationVariables>(CreatePatientAuthorizedHospitalDocument, options);
      }
export type CreatePatientAuthorizedHospitalMutationHookResult = ReturnType<typeof useCreatePatientAuthorizedHospitalMutation>;
export type CreatePatientAuthorizedHospitalMutationResult = Apollo.MutationResult<CreatePatientAuthorizedHospitalMutation>;
export type CreatePatientAuthorizedHospitalMutationOptions = Apollo.BaseMutationOptions<CreatePatientAuthorizedHospitalMutation, CreatePatientAuthorizedHospitalMutationVariables>;
export const DeletePatientAuthorizedHospitalDocument = gql`
    mutation deletePatientAuthorizedHospital($patientId: String) {
  deletePatientAuthorizedHospital(patientId: $patientId) {
    ok
  }
}
    `;
export type DeletePatientAuthorizedHospitalMutationFn = Apollo.MutationFunction<DeletePatientAuthorizedHospitalMutation, DeletePatientAuthorizedHospitalMutationVariables>;

/**
 * __useDeletePatientAuthorizedHospitalMutation__
 *
 * To run a mutation, you first call `useDeletePatientAuthorizedHospitalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePatientAuthorizedHospitalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePatientAuthorizedHospitalMutation, { data, loading, error }] = useDeletePatientAuthorizedHospitalMutation({
 *   variables: {
 *      patientId: // value for 'patientId'
 *   },
 * });
 */
export function useDeletePatientAuthorizedHospitalMutation(baseOptions?: Apollo.MutationHookOptions<DeletePatientAuthorizedHospitalMutation, DeletePatientAuthorizedHospitalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePatientAuthorizedHospitalMutation, DeletePatientAuthorizedHospitalMutationVariables>(DeletePatientAuthorizedHospitalDocument, options);
      }
export type DeletePatientAuthorizedHospitalMutationHookResult = ReturnType<typeof useDeletePatientAuthorizedHospitalMutation>;
export type DeletePatientAuthorizedHospitalMutationResult = Apollo.MutationResult<DeletePatientAuthorizedHospitalMutation>;
export type DeletePatientAuthorizedHospitalMutationOptions = Apollo.BaseMutationOptions<DeletePatientAuthorizedHospitalMutation, DeletePatientAuthorizedHospitalMutationVariables>;
export const IncrementHospitalResourceDocument = gql`
    mutation incrementHospitalResource($resource: String) {
  incrementHospitalResource(resource: $resource) {
    ok
  }
}
    `;
export type IncrementHospitalResourceMutationFn = Apollo.MutationFunction<IncrementHospitalResourceMutation, IncrementHospitalResourceMutationVariables>;

/**
 * __useIncrementHospitalResourceMutation__
 *
 * To run a mutation, you first call `useIncrementHospitalResourceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useIncrementHospitalResourceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [incrementHospitalResourceMutation, { data, loading, error }] = useIncrementHospitalResourceMutation({
 *   variables: {
 *      resource: // value for 'resource'
 *   },
 * });
 */
export function useIncrementHospitalResourceMutation(baseOptions?: Apollo.MutationHookOptions<IncrementHospitalResourceMutation, IncrementHospitalResourceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<IncrementHospitalResourceMutation, IncrementHospitalResourceMutationVariables>(IncrementHospitalResourceDocument, options);
      }
export type IncrementHospitalResourceMutationHookResult = ReturnType<typeof useIncrementHospitalResourceMutation>;
export type IncrementHospitalResourceMutationResult = Apollo.MutationResult<IncrementHospitalResourceMutation>;
export type IncrementHospitalResourceMutationOptions = Apollo.BaseMutationOptions<IncrementHospitalResourceMutation, IncrementHospitalResourceMutationVariables>;
export const DecrementHospitalResourceDocument = gql`
    mutation decrementHospitalResource($resource: String) {
  decrementHospitalResource(resource: $resource) {
    ok
  }
}
    `;
export type DecrementHospitalResourceMutationFn = Apollo.MutationFunction<DecrementHospitalResourceMutation, DecrementHospitalResourceMutationVariables>;

/**
 * __useDecrementHospitalResourceMutation__
 *
 * To run a mutation, you first call `useDecrementHospitalResourceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDecrementHospitalResourceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [decrementHospitalResourceMutation, { data, loading, error }] = useDecrementHospitalResourceMutation({
 *   variables: {
 *      resource: // value for 'resource'
 *   },
 * });
 */
export function useDecrementHospitalResourceMutation(baseOptions?: Apollo.MutationHookOptions<DecrementHospitalResourceMutation, DecrementHospitalResourceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DecrementHospitalResourceMutation, DecrementHospitalResourceMutationVariables>(DecrementHospitalResourceDocument, options);
      }
export type DecrementHospitalResourceMutationHookResult = ReturnType<typeof useDecrementHospitalResourceMutation>;
export type DecrementHospitalResourceMutationResult = Apollo.MutationResult<DecrementHospitalResourceMutation>;
export type DecrementHospitalResourceMutationOptions = Apollo.BaseMutationOptions<DecrementHospitalResourceMutation, DecrementHospitalResourceMutationVariables>;
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
export const AdmittedRecordsDocument = gql`
    query admittedRecords {
  me {
    hospital {
      patientauthorizedhospitalSet {
        patientId {
          id
          name
          phone
          doctorpatientassignedSet {
            doctor {
              id
              name
            }
            assignedAt
            status
          }
          doctornotesSet {
            diagnosis
          }
        }
      }
    }
  }
}
    `;

/**
 * __useAdmittedRecordsQuery__
 *
 * To run a query within a React component, call `useAdmittedRecordsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdmittedRecordsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdmittedRecordsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdmittedRecordsQuery(baseOptions?: Apollo.QueryHookOptions<AdmittedRecordsQuery, AdmittedRecordsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdmittedRecordsQuery, AdmittedRecordsQueryVariables>(AdmittedRecordsDocument, options);
      }
export function useAdmittedRecordsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdmittedRecordsQuery, AdmittedRecordsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdmittedRecordsQuery, AdmittedRecordsQueryVariables>(AdmittedRecordsDocument, options);
        }
export type AdmittedRecordsQueryHookResult = ReturnType<typeof useAdmittedRecordsQuery>;
export type AdmittedRecordsLazyQueryHookResult = ReturnType<typeof useAdmittedRecordsLazyQuery>;
export type AdmittedRecordsQueryResult = Apollo.QueryResult<AdmittedRecordsQuery, AdmittedRecordsQueryVariables>;
export const CurrentHospitalResourcesDocument = gql`
    query currentHospitalResources {
  currentHospitalResource {
    ...hospitalResources
  }
}
    ${HospitalResourcesFragmentDoc}`;

/**
 * __useCurrentHospitalResourcesQuery__
 *
 * To run a query within a React component, call `useCurrentHospitalResourcesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentHospitalResourcesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentHospitalResourcesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentHospitalResourcesQuery(baseOptions?: Apollo.QueryHookOptions<CurrentHospitalResourcesQuery, CurrentHospitalResourcesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentHospitalResourcesQuery, CurrentHospitalResourcesQueryVariables>(CurrentHospitalResourcesDocument, options);
      }
export function useCurrentHospitalResourcesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentHospitalResourcesQuery, CurrentHospitalResourcesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentHospitalResourcesQuery, CurrentHospitalResourcesQueryVariables>(CurrentHospitalResourcesDocument, options);
        }
export type CurrentHospitalResourcesQueryHookResult = ReturnType<typeof useCurrentHospitalResourcesQuery>;
export type CurrentHospitalResourcesLazyQueryHookResult = ReturnType<typeof useCurrentHospitalResourcesLazyQuery>;
export type CurrentHospitalResourcesQueryResult = Apollo.QueryResult<CurrentHospitalResourcesQuery, CurrentHospitalResourcesQueryVariables>;
export const AllHospitalsDocument = gql`
    query allHospitals {
  allHospitals {
    name
    address
    phone
    longitude
    latitude
    hospitalresource {
      ...hospitalResources
    }
  }
}
    ${HospitalResourcesFragmentDoc}`;

/**
 * __useAllHospitalsQuery__
 *
 * To run a query within a React component, call `useAllHospitalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllHospitalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllHospitalsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllHospitalsQuery(baseOptions?: Apollo.QueryHookOptions<AllHospitalsQuery, AllHospitalsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllHospitalsQuery, AllHospitalsQueryVariables>(AllHospitalsDocument, options);
      }
export function useAllHospitalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllHospitalsQuery, AllHospitalsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllHospitalsQuery, AllHospitalsQueryVariables>(AllHospitalsDocument, options);
        }
export type AllHospitalsQueryHookResult = ReturnType<typeof useAllHospitalsQuery>;
export type AllHospitalsLazyQueryHookResult = ReturnType<typeof useAllHospitalsLazyQuery>;
export type AllHospitalsQueryResult = Apollo.QueryResult<AllHospitalsQuery, AllHospitalsQueryVariables>;
export const CreatePatientDocument = gql`
    mutation createPatient($name: String!, $phone: String!, $aadhar: String!) {
  createPatient(name: $name, phone: $phone, aadhar: $aadhar) {
    patient {
      id
      name
      phone
      aadhar
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
 *      name: // value for 'name'
 *      phone: // value for 'phone'
 *      aadhar: // value for 'aadhar'
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
export const PatientByAadharDocument = gql`
    query patientByAadhar($phone: String, $aadhar: String) {
  patient(phone: $phone, aadhar: $aadhar) {
    id
    name
    phone
    aadhar
    patientauthorizedhospitalSet {
      hospitalId {
        id
        name
      }
    }
  }
}
    `;

/**
 * __usePatientByAadharQuery__
 *
 * To run a query within a React component, call `usePatientByAadharQuery` and pass it any options that fit your needs.
 * When your component renders, `usePatientByAadharQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePatientByAadharQuery({
 *   variables: {
 *      phone: // value for 'phone'
 *      aadhar: // value for 'aadhar'
 *   },
 * });
 */
export function usePatientByAadharQuery(baseOptions?: Apollo.QueryHookOptions<PatientByAadharQuery, PatientByAadharQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PatientByAadharQuery, PatientByAadharQueryVariables>(PatientByAadharDocument, options);
      }
export function usePatientByAadharLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PatientByAadharQuery, PatientByAadharQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PatientByAadharQuery, PatientByAadharQueryVariables>(PatientByAadharDocument, options);
        }
export type PatientByAadharQueryHookResult = ReturnType<typeof usePatientByAadharQuery>;
export type PatientByAadharLazyQueryHookResult = ReturnType<typeof usePatientByAadharLazyQuery>;
export type PatientByAadharQueryResult = Apollo.QueryResult<PatientByAadharQuery, PatientByAadharQueryVariables>;
export const PatientByIdDocument = gql`
    query patientById($id: String) {
  patient(id: $id) {
    id
    name
    phone
    doctorpatientassignedSet {
      id
      doctor {
        name
      }
      status
      assignedAt
    }
    doctornotesSet {
      diagnosis
      notes
    }
    medicinerecordSet {
      id
      prescription
    }
    testresultSet {
      id
      testName
      testResult
      media
    }
  }
}
    `;

/**
 * __usePatientByIdQuery__
 *
 * To run a query within a React component, call `usePatientByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `usePatientByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePatientByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePatientByIdQuery(baseOptions?: Apollo.QueryHookOptions<PatientByIdQuery, PatientByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PatientByIdQuery, PatientByIdQueryVariables>(PatientByIdDocument, options);
      }
export function usePatientByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PatientByIdQuery, PatientByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PatientByIdQuery, PatientByIdQueryVariables>(PatientByIdDocument, options);
        }
export type PatientByIdQueryHookResult = ReturnType<typeof usePatientByIdQuery>;
export type PatientByIdLazyQueryHookResult = ReturnType<typeof usePatientByIdLazyQuery>;
export type PatientByIdQueryResult = Apollo.QueryResult<PatientByIdQuery, PatientByIdQueryVariables>;
export const DischargePatientDocument = gql`
    mutation dischargePatient($patient: String) {
  dischargePatient(patient: $patient) {
    ok
  }
}
    `;
export type DischargePatientMutationFn = Apollo.MutationFunction<DischargePatientMutation, DischargePatientMutationVariables>;

/**
 * __useDischargePatientMutation__
 *
 * To run a mutation, you first call `useDischargePatientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDischargePatientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [dischargePatientMutation, { data, loading, error }] = useDischargePatientMutation({
 *   variables: {
 *      patient: // value for 'patient'
 *   },
 * });
 */
export function useDischargePatientMutation(baseOptions?: Apollo.MutationHookOptions<DischargePatientMutation, DischargePatientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DischargePatientMutation, DischargePatientMutationVariables>(DischargePatientDocument, options);
      }
export type DischargePatientMutationHookResult = ReturnType<typeof useDischargePatientMutation>;
export type DischargePatientMutationResult = Apollo.MutationResult<DischargePatientMutation>;
export type DischargePatientMutationOptions = Apollo.BaseMutationOptions<DischargePatientMutation, DischargePatientMutationVariables>;
export const ReferPatientDocument = gql`
    mutation referPatient($patient: String) {
  referPatient(patient: $patient) {
    ok
  }
}
    `;
export type ReferPatientMutationFn = Apollo.MutationFunction<ReferPatientMutation, ReferPatientMutationVariables>;

/**
 * __useReferPatientMutation__
 *
 * To run a mutation, you first call `useReferPatientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReferPatientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [referPatientMutation, { data, loading, error }] = useReferPatientMutation({
 *   variables: {
 *      patient: // value for 'patient'
 *   },
 * });
 */
export function useReferPatientMutation(baseOptions?: Apollo.MutationHookOptions<ReferPatientMutation, ReferPatientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReferPatientMutation, ReferPatientMutationVariables>(ReferPatientDocument, options);
      }
export type ReferPatientMutationHookResult = ReturnType<typeof useReferPatientMutation>;
export type ReferPatientMutationResult = Apollo.MutationResult<ReferPatientMutation>;
export type ReferPatientMutationOptions = Apollo.BaseMutationOptions<ReferPatientMutation, ReferPatientMutationVariables>;
export const CreateTestResultDocument = gql`
    mutation createTestResult($media: String, $patientId: String, $testName: String, $testResult: String) {
  createTestResult(
    media: $media
    patientId: $patientId
    testName: $testName
    testResult: $testResult
  ) {
    testResult {
      id
      media
      testName
    }
  }
}
    `;
export type CreateTestResultMutationFn = Apollo.MutationFunction<CreateTestResultMutation, CreateTestResultMutationVariables>;

/**
 * __useCreateTestResultMutation__
 *
 * To run a mutation, you first call `useCreateTestResultMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTestResultMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTestResultMutation, { data, loading, error }] = useCreateTestResultMutation({
 *   variables: {
 *      media: // value for 'media'
 *      patientId: // value for 'patientId'
 *      testName: // value for 'testName'
 *      testResult: // value for 'testResult'
 *   },
 * });
 */
export function useCreateTestResultMutation(baseOptions?: Apollo.MutationHookOptions<CreateTestResultMutation, CreateTestResultMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTestResultMutation, CreateTestResultMutationVariables>(CreateTestResultDocument, options);
      }
export type CreateTestResultMutationHookResult = ReturnType<typeof useCreateTestResultMutation>;
export type CreateTestResultMutationResult = Apollo.MutationResult<CreateTestResultMutation>;
export type CreateTestResultMutationOptions = Apollo.BaseMutationOptions<CreateTestResultMutation, CreateTestResultMutationVariables>;
export const UpdateTestResultDocument = gql`
    mutation updateTestResult($id: String!, $patient: String, $testName: String, $testResult: String) {
  updateTestResult(
    id: $id
    patient: $patient
    testName: $testName
    testResult: $testResult
  ) {
    testResult {
      id
      patient {
        id
      }
      testName
      testResult
    }
  }
}
    `;
export type UpdateTestResultMutationFn = Apollo.MutationFunction<UpdateTestResultMutation, UpdateTestResultMutationVariables>;

/**
 * __useUpdateTestResultMutation__
 *
 * To run a mutation, you first call `useUpdateTestResultMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTestResultMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTestResultMutation, { data, loading, error }] = useUpdateTestResultMutation({
 *   variables: {
 *      id: // value for 'id'
 *      patient: // value for 'patient'
 *      testName: // value for 'testName'
 *      testResult: // value for 'testResult'
 *   },
 * });
 */
export function useUpdateTestResultMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTestResultMutation, UpdateTestResultMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTestResultMutation, UpdateTestResultMutationVariables>(UpdateTestResultDocument, options);
      }
export type UpdateTestResultMutationHookResult = ReturnType<typeof useUpdateTestResultMutation>;
export type UpdateTestResultMutationResult = Apollo.MutationResult<UpdateTestResultMutation>;
export type UpdateTestResultMutationOptions = Apollo.BaseMutationOptions<UpdateTestResultMutation, UpdateTestResultMutationVariables>;
export const CreateDoctorNotesDocument = gql`
    mutation createDoctorNotes($diagnosis: String, $doctor: String, $notes: String, $patientId: String) {
  createDoctorNotes(
    diagnosis: $diagnosis
    doctor: $doctor
    notes: $notes
    patientId: $patientId
  ) {
    doctorNotes {
      id
      patient {
        id
      }
      doctor {
        id
      }
      diagnosis
      notes
    }
  }
}
    `;
export type CreateDoctorNotesMutationFn = Apollo.MutationFunction<CreateDoctorNotesMutation, CreateDoctorNotesMutationVariables>;

/**
 * __useCreateDoctorNotesMutation__
 *
 * To run a mutation, you first call `useCreateDoctorNotesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDoctorNotesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDoctorNotesMutation, { data, loading, error }] = useCreateDoctorNotesMutation({
 *   variables: {
 *      diagnosis: // value for 'diagnosis'
 *      doctor: // value for 'doctor'
 *      notes: // value for 'notes'
 *      patientId: // value for 'patientId'
 *   },
 * });
 */
export function useCreateDoctorNotesMutation(baseOptions?: Apollo.MutationHookOptions<CreateDoctorNotesMutation, CreateDoctorNotesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDoctorNotesMutation, CreateDoctorNotesMutationVariables>(CreateDoctorNotesDocument, options);
      }
export type CreateDoctorNotesMutationHookResult = ReturnType<typeof useCreateDoctorNotesMutation>;
export type CreateDoctorNotesMutationResult = Apollo.MutationResult<CreateDoctorNotesMutation>;
export type CreateDoctorNotesMutationOptions = Apollo.BaseMutationOptions<CreateDoctorNotesMutation, CreateDoctorNotesMutationVariables>;
export const UpdateDoctorNotesDocument = gql`
    mutation updateDoctorNotes($id: String!, $diagnosis: String, $doctor: String, $notes: String, $patientId: String) {
  updateDoctorNotes(
    id: $id
    diagnosis: $diagnosis
    doctor: $doctor
    notes: $notes
    patientId: $patientId
  ) {
    doctorNotes {
      id
      patient {
        id
      }
      doctor {
        id
      }
      diagnosis
      notes
    }
  }
}
    `;
export type UpdateDoctorNotesMutationFn = Apollo.MutationFunction<UpdateDoctorNotesMutation, UpdateDoctorNotesMutationVariables>;

/**
 * __useUpdateDoctorNotesMutation__
 *
 * To run a mutation, you first call `useUpdateDoctorNotesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDoctorNotesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDoctorNotesMutation, { data, loading, error }] = useUpdateDoctorNotesMutation({
 *   variables: {
 *      id: // value for 'id'
 *      diagnosis: // value for 'diagnosis'
 *      doctor: // value for 'doctor'
 *      notes: // value for 'notes'
 *      patientId: // value for 'patientId'
 *   },
 * });
 */
export function useUpdateDoctorNotesMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDoctorNotesMutation, UpdateDoctorNotesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDoctorNotesMutation, UpdateDoctorNotesMutationVariables>(UpdateDoctorNotesDocument, options);
      }
export type UpdateDoctorNotesMutationHookResult = ReturnType<typeof useUpdateDoctorNotesMutation>;
export type UpdateDoctorNotesMutationResult = Apollo.MutationResult<UpdateDoctorNotesMutation>;
export type UpdateDoctorNotesMutationOptions = Apollo.BaseMutationOptions<UpdateDoctorNotesMutation, UpdateDoctorNotesMutationVariables>;
export const CreateMedicineRecordDocument = gql`
    mutation createMedicineRecord($patientId: String, $prescription: String) {
  createMedicineRecord(patientId: $patientId, prescription: $prescription) {
    medicineRecord {
      id
      patient {
        id
      }
      prescription
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
 *      prescription: // value for 'prescription'
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
export const UpdateMedicineRecordDocument = gql`
    mutation updateMedicineRecord($id: String!, $patientId: String, $prescription: String) {
  updateMedicineRecord(
    id: $id
    patientId: $patientId
    prescription: $prescription
  ) {
    medicineRecord {
      id
      patient {
        id
      }
      prescription
    }
  }
}
    `;
export type UpdateMedicineRecordMutationFn = Apollo.MutationFunction<UpdateMedicineRecordMutation, UpdateMedicineRecordMutationVariables>;

/**
 * __useUpdateMedicineRecordMutation__
 *
 * To run a mutation, you first call `useUpdateMedicineRecordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMedicineRecordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMedicineRecordMutation, { data, loading, error }] = useUpdateMedicineRecordMutation({
 *   variables: {
 *      id: // value for 'id'
 *      patientId: // value for 'patientId'
 *      prescription: // value for 'prescription'
 *   },
 * });
 */
export function useUpdateMedicineRecordMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMedicineRecordMutation, UpdateMedicineRecordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMedicineRecordMutation, UpdateMedicineRecordMutationVariables>(UpdateMedicineRecordDocument, options);
      }
export type UpdateMedicineRecordMutationHookResult = ReturnType<typeof useUpdateMedicineRecordMutation>;
export type UpdateMedicineRecordMutationResult = Apollo.MutationResult<UpdateMedicineRecordMutation>;
export type UpdateMedicineRecordMutationOptions = Apollo.BaseMutationOptions<UpdateMedicineRecordMutation, UpdateMedicineRecordMutationVariables>;
export const CreateMedicinePrescriptionDocument = gql`
    mutation createMedicinePrescription($doses: String!, $medicine: String!) {
  createMedicinePrescription(doses: $doses, medicine: $medicine) {
    medicinePrescription {
      id
      medicine
      doses
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