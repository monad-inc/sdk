# ScannerAuthConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IamRole** | Pointer to [**ScannerIAMRoleVariant**](ScannerIAMRoleVariant.md) |  | [optional] 
**StaticCredentials** | Pointer to [**ScannerStaticCredentialsVariant**](ScannerStaticCredentialsVariant.md) |  | [optional] 
**Type** | **string** | Authentication type: iam_role or static_credentials. | 

## Methods

### NewScannerAuthConfig

`func NewScannerAuthConfig(type_ string, ) *ScannerAuthConfig`

NewScannerAuthConfig instantiates a new ScannerAuthConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScannerAuthConfigWithDefaults

`func NewScannerAuthConfigWithDefaults() *ScannerAuthConfig`

NewScannerAuthConfigWithDefaults instantiates a new ScannerAuthConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIamRole

`func (o *ScannerAuthConfig) GetIamRole() ScannerIAMRoleVariant`

GetIamRole returns the IamRole field if non-nil, zero value otherwise.

### GetIamRoleOk

`func (o *ScannerAuthConfig) GetIamRoleOk() (*ScannerIAMRoleVariant, bool)`

GetIamRoleOk returns a tuple with the IamRole field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIamRole

`func (o *ScannerAuthConfig) SetIamRole(v ScannerIAMRoleVariant)`

SetIamRole sets IamRole field to given value.

### HasIamRole

`func (o *ScannerAuthConfig) HasIamRole() bool`

HasIamRole returns a boolean if a field has been set.

### GetStaticCredentials

`func (o *ScannerAuthConfig) GetStaticCredentials() ScannerStaticCredentialsVariant`

GetStaticCredentials returns the StaticCredentials field if non-nil, zero value otherwise.

### GetStaticCredentialsOk

`func (o *ScannerAuthConfig) GetStaticCredentialsOk() (*ScannerStaticCredentialsVariant, bool)`

GetStaticCredentialsOk returns a tuple with the StaticCredentials field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStaticCredentials

`func (o *ScannerAuthConfig) SetStaticCredentials(v ScannerStaticCredentialsVariant)`

SetStaticCredentials sets StaticCredentials field to given value.

### HasStaticCredentials

`func (o *ScannerAuthConfig) HasStaticCredentials() bool`

HasStaticCredentials returns a boolean if a field has been set.

### GetType

`func (o *ScannerAuthConfig) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ScannerAuthConfig) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ScannerAuthConfig) SetType(v string)`

SetType sets Type field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


