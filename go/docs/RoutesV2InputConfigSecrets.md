# RoutesV2InputConfigSecrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClientId** | [**ModelsSecret**](ModelsSecret.md) |  | 
**ClientSecret** | [**ModelsSecret**](ModelsSecret.md) |  | 
**CredentialsJson** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**OauthToken** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**IntegrationKey** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**SecretKey** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**PersonalAccessToken** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**EnterpriseId** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**AwsAccessKey** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**AwsSecretKey** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**ApiKey** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**Token** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**Password** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**PrivateKey** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**AccessKey** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**CustomerId** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**Domain** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Methods

### NewRoutesV2InputConfigSecrets

`func NewRoutesV2InputConfigSecrets(clientId ModelsSecret, clientSecret ModelsSecret, ) *RoutesV2InputConfigSecrets`

NewRoutesV2InputConfigSecrets instantiates a new RoutesV2InputConfigSecrets object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV2InputConfigSecretsWithDefaults

`func NewRoutesV2InputConfigSecretsWithDefaults() *RoutesV2InputConfigSecrets`

NewRoutesV2InputConfigSecretsWithDefaults instantiates a new RoutesV2InputConfigSecrets object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClientId

`func (o *RoutesV2InputConfigSecrets) GetClientId() ModelsSecret`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *RoutesV2InputConfigSecrets) GetClientIdOk() (*ModelsSecret, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *RoutesV2InputConfigSecrets) SetClientId(v ModelsSecret)`

SetClientId sets ClientId field to given value.


### GetClientSecret

`func (o *RoutesV2InputConfigSecrets) GetClientSecret() ModelsSecret`

GetClientSecret returns the ClientSecret field if non-nil, zero value otherwise.

### GetClientSecretOk

`func (o *RoutesV2InputConfigSecrets) GetClientSecretOk() (*ModelsSecret, bool)`

GetClientSecretOk returns a tuple with the ClientSecret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientSecret

`func (o *RoutesV2InputConfigSecrets) SetClientSecret(v ModelsSecret)`

SetClientSecret sets ClientSecret field to given value.


### GetCredentialsJson

`func (o *RoutesV2InputConfigSecrets) GetCredentialsJson() ModelsSecret`

GetCredentialsJson returns the CredentialsJson field if non-nil, zero value otherwise.

### GetCredentialsJsonOk

`func (o *RoutesV2InputConfigSecrets) GetCredentialsJsonOk() (*ModelsSecret, bool)`

GetCredentialsJsonOk returns a tuple with the CredentialsJson field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredentialsJson

`func (o *RoutesV2InputConfigSecrets) SetCredentialsJson(v ModelsSecret)`

SetCredentialsJson sets CredentialsJson field to given value.

### HasCredentialsJson

`func (o *RoutesV2InputConfigSecrets) HasCredentialsJson() bool`

HasCredentialsJson returns a boolean if a field has been set.

### GetOauthToken

`func (o *RoutesV2InputConfigSecrets) GetOauthToken() ModelsSecret`

GetOauthToken returns the OauthToken field if non-nil, zero value otherwise.

### GetOauthTokenOk

`func (o *RoutesV2InputConfigSecrets) GetOauthTokenOk() (*ModelsSecret, bool)`

GetOauthTokenOk returns a tuple with the OauthToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOauthToken

`func (o *RoutesV2InputConfigSecrets) SetOauthToken(v ModelsSecret)`

SetOauthToken sets OauthToken field to given value.

### HasOauthToken

`func (o *RoutesV2InputConfigSecrets) HasOauthToken() bool`

HasOauthToken returns a boolean if a field has been set.

### GetIntegrationKey

`func (o *RoutesV2InputConfigSecrets) GetIntegrationKey() ModelsSecret`

GetIntegrationKey returns the IntegrationKey field if non-nil, zero value otherwise.

### GetIntegrationKeyOk

`func (o *RoutesV2InputConfigSecrets) GetIntegrationKeyOk() (*ModelsSecret, bool)`

GetIntegrationKeyOk returns a tuple with the IntegrationKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegrationKey

`func (o *RoutesV2InputConfigSecrets) SetIntegrationKey(v ModelsSecret)`

SetIntegrationKey sets IntegrationKey field to given value.

### HasIntegrationKey

`func (o *RoutesV2InputConfigSecrets) HasIntegrationKey() bool`

HasIntegrationKey returns a boolean if a field has been set.

### GetSecretKey

`func (o *RoutesV2InputConfigSecrets) GetSecretKey() ModelsSecret`

GetSecretKey returns the SecretKey field if non-nil, zero value otherwise.

### GetSecretKeyOk

`func (o *RoutesV2InputConfigSecrets) GetSecretKeyOk() (*ModelsSecret, bool)`

GetSecretKeyOk returns a tuple with the SecretKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecretKey

`func (o *RoutesV2InputConfigSecrets) SetSecretKey(v ModelsSecret)`

SetSecretKey sets SecretKey field to given value.

### HasSecretKey

`func (o *RoutesV2InputConfigSecrets) HasSecretKey() bool`

HasSecretKey returns a boolean if a field has been set.

### GetPersonalAccessToken

`func (o *RoutesV2InputConfigSecrets) GetPersonalAccessToken() ModelsSecret`

GetPersonalAccessToken returns the PersonalAccessToken field if non-nil, zero value otherwise.

### GetPersonalAccessTokenOk

`func (o *RoutesV2InputConfigSecrets) GetPersonalAccessTokenOk() (*ModelsSecret, bool)`

GetPersonalAccessTokenOk returns a tuple with the PersonalAccessToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPersonalAccessToken

`func (o *RoutesV2InputConfigSecrets) SetPersonalAccessToken(v ModelsSecret)`

SetPersonalAccessToken sets PersonalAccessToken field to given value.

### HasPersonalAccessToken

`func (o *RoutesV2InputConfigSecrets) HasPersonalAccessToken() bool`

HasPersonalAccessToken returns a boolean if a field has been set.

### GetEnterpriseId

`func (o *RoutesV2InputConfigSecrets) GetEnterpriseId() ModelsSecret`

GetEnterpriseId returns the EnterpriseId field if non-nil, zero value otherwise.

### GetEnterpriseIdOk

`func (o *RoutesV2InputConfigSecrets) GetEnterpriseIdOk() (*ModelsSecret, bool)`

GetEnterpriseIdOk returns a tuple with the EnterpriseId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnterpriseId

`func (o *RoutesV2InputConfigSecrets) SetEnterpriseId(v ModelsSecret)`

SetEnterpriseId sets EnterpriseId field to given value.

### HasEnterpriseId

`func (o *RoutesV2InputConfigSecrets) HasEnterpriseId() bool`

HasEnterpriseId returns a boolean if a field has been set.

### GetAwsAccessKey

`func (o *RoutesV2InputConfigSecrets) GetAwsAccessKey() ModelsSecret`

GetAwsAccessKey returns the AwsAccessKey field if non-nil, zero value otherwise.

### GetAwsAccessKeyOk

`func (o *RoutesV2InputConfigSecrets) GetAwsAccessKeyOk() (*ModelsSecret, bool)`

GetAwsAccessKeyOk returns a tuple with the AwsAccessKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwsAccessKey

`func (o *RoutesV2InputConfigSecrets) SetAwsAccessKey(v ModelsSecret)`

SetAwsAccessKey sets AwsAccessKey field to given value.

### HasAwsAccessKey

`func (o *RoutesV2InputConfigSecrets) HasAwsAccessKey() bool`

HasAwsAccessKey returns a boolean if a field has been set.

### GetAwsSecretKey

`func (o *RoutesV2InputConfigSecrets) GetAwsSecretKey() ModelsSecret`

GetAwsSecretKey returns the AwsSecretKey field if non-nil, zero value otherwise.

### GetAwsSecretKeyOk

`func (o *RoutesV2InputConfigSecrets) GetAwsSecretKeyOk() (*ModelsSecret, bool)`

GetAwsSecretKeyOk returns a tuple with the AwsSecretKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwsSecretKey

`func (o *RoutesV2InputConfigSecrets) SetAwsSecretKey(v ModelsSecret)`

SetAwsSecretKey sets AwsSecretKey field to given value.

### HasAwsSecretKey

`func (o *RoutesV2InputConfigSecrets) HasAwsSecretKey() bool`

HasAwsSecretKey returns a boolean if a field has been set.

### GetApiKey

`func (o *RoutesV2InputConfigSecrets) GetApiKey() ModelsSecret`

GetApiKey returns the ApiKey field if non-nil, zero value otherwise.

### GetApiKeyOk

`func (o *RoutesV2InputConfigSecrets) GetApiKeyOk() (*ModelsSecret, bool)`

GetApiKeyOk returns a tuple with the ApiKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiKey

`func (o *RoutesV2InputConfigSecrets) SetApiKey(v ModelsSecret)`

SetApiKey sets ApiKey field to given value.

### HasApiKey

`func (o *RoutesV2InputConfigSecrets) HasApiKey() bool`

HasApiKey returns a boolean if a field has been set.

### GetToken

`func (o *RoutesV2InputConfigSecrets) GetToken() ModelsSecret`

GetToken returns the Token field if non-nil, zero value otherwise.

### GetTokenOk

`func (o *RoutesV2InputConfigSecrets) GetTokenOk() (*ModelsSecret, bool)`

GetTokenOk returns a tuple with the Token field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToken

`func (o *RoutesV2InputConfigSecrets) SetToken(v ModelsSecret)`

SetToken sets Token field to given value.

### HasToken

`func (o *RoutesV2InputConfigSecrets) HasToken() bool`

HasToken returns a boolean if a field has been set.

### GetPassword

`func (o *RoutesV2InputConfigSecrets) GetPassword() ModelsSecret`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *RoutesV2InputConfigSecrets) GetPasswordOk() (*ModelsSecret, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *RoutesV2InputConfigSecrets) SetPassword(v ModelsSecret)`

SetPassword sets Password field to given value.

### HasPassword

`func (o *RoutesV2InputConfigSecrets) HasPassword() bool`

HasPassword returns a boolean if a field has been set.

### GetPrivateKey

`func (o *RoutesV2InputConfigSecrets) GetPrivateKey() ModelsSecret`

GetPrivateKey returns the PrivateKey field if non-nil, zero value otherwise.

### GetPrivateKeyOk

`func (o *RoutesV2InputConfigSecrets) GetPrivateKeyOk() (*ModelsSecret, bool)`

GetPrivateKeyOk returns a tuple with the PrivateKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivateKey

`func (o *RoutesV2InputConfigSecrets) SetPrivateKey(v ModelsSecret)`

SetPrivateKey sets PrivateKey field to given value.

### HasPrivateKey

`func (o *RoutesV2InputConfigSecrets) HasPrivateKey() bool`

HasPrivateKey returns a boolean if a field has been set.

### GetAccessKey

`func (o *RoutesV2InputConfigSecrets) GetAccessKey() ModelsSecret`

GetAccessKey returns the AccessKey field if non-nil, zero value otherwise.

### GetAccessKeyOk

`func (o *RoutesV2InputConfigSecrets) GetAccessKeyOk() (*ModelsSecret, bool)`

GetAccessKeyOk returns a tuple with the AccessKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessKey

`func (o *RoutesV2InputConfigSecrets) SetAccessKey(v ModelsSecret)`

SetAccessKey sets AccessKey field to given value.

### HasAccessKey

`func (o *RoutesV2InputConfigSecrets) HasAccessKey() bool`

HasAccessKey returns a boolean if a field has been set.

### GetCustomerId

`func (o *RoutesV2InputConfigSecrets) GetCustomerId() ModelsSecret`

GetCustomerId returns the CustomerId field if non-nil, zero value otherwise.

### GetCustomerIdOk

`func (o *RoutesV2InputConfigSecrets) GetCustomerIdOk() (*ModelsSecret, bool)`

GetCustomerIdOk returns a tuple with the CustomerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerId

`func (o *RoutesV2InputConfigSecrets) SetCustomerId(v ModelsSecret)`

SetCustomerId sets CustomerId field to given value.

### HasCustomerId

`func (o *RoutesV2InputConfigSecrets) HasCustomerId() bool`

HasCustomerId returns a boolean if a field has been set.

### GetDomain

`func (o *RoutesV2InputConfigSecrets) GetDomain() ModelsSecret`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *RoutesV2InputConfigSecrets) GetDomainOk() (*ModelsSecret, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *RoutesV2InputConfigSecrets) SetDomain(v ModelsSecret)`

SetDomain sets Domain field to given value.

### HasDomain

`func (o *RoutesV2InputConfigSecrets) HasDomain() bool`

HasDomain returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


