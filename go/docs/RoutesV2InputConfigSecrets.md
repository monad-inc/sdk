# RoutesV2InputConfigSecrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClientId** | Pointer to **string** | Client ID for the Wiz API. This is required to authenticate requests. | [optional] 
**ClientSecret** | Pointer to **string** | Client Secret for the Wiz API. This is required to authenticate requests. | [optional] 
**CredentialsJson** | Pointer to **string** | JSON credentials to authenticate with Google Cloud. | [optional] 
**IntegrationKey** | Pointer to **string** |  | [optional] 
**SecretKey** | Pointer to **string** | Secret Key for the Tenable API. This is required to authenticate requests. | [optional] 
**PersonalAccessToken** | Pointer to **string** | Your personal access token that grants read:audit_log | [optional] 
**EnterpriseId** | Pointer to **string** | Client Secret for the Box API. This is required to authenticate requests. | [optional] 
**ApiKey** | Pointer to **string** | API Key for the Snyk API. This is required to authenticate requests. | [optional] 
**Token** | Pointer to **string** | Token for the Wiz API. This is required to authenticate requests. | [optional] 
**AccessKey** | Pointer to **string** | Access Key for the Tenable API. This is required to authenticate requests. | [optional] 
**CustomerId** | Pointer to **string** | Google Workspace Customer ID. If you use your google workspace customer ID you will pull data on all users in all domains of your Google Workspace account. This should be set if Domain is not set. | [optional] 
**Domain** | Pointer to **string** | Domain name your users belong to. If you use a google workspace domain you will only pull user data for users that belong to that domain. This should be set if CustomerID is not set | [optional] 

## Methods

### NewRoutesV2InputConfigSecrets

`func NewRoutesV2InputConfigSecrets() *RoutesV2InputConfigSecrets`

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

`func (o *RoutesV2InputConfigSecrets) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *RoutesV2InputConfigSecrets) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *RoutesV2InputConfigSecrets) SetClientId(v string)`

SetClientId sets ClientId field to given value.

### HasClientId

`func (o *RoutesV2InputConfigSecrets) HasClientId() bool`

HasClientId returns a boolean if a field has been set.

### GetClientSecret

`func (o *RoutesV2InputConfigSecrets) GetClientSecret() string`

GetClientSecret returns the ClientSecret field if non-nil, zero value otherwise.

### GetClientSecretOk

`func (o *RoutesV2InputConfigSecrets) GetClientSecretOk() (*string, bool)`

GetClientSecretOk returns a tuple with the ClientSecret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientSecret

`func (o *RoutesV2InputConfigSecrets) SetClientSecret(v string)`

SetClientSecret sets ClientSecret field to given value.

### HasClientSecret

`func (o *RoutesV2InputConfigSecrets) HasClientSecret() bool`

HasClientSecret returns a boolean if a field has been set.

### GetCredentialsJson

`func (o *RoutesV2InputConfigSecrets) GetCredentialsJson() string`

GetCredentialsJson returns the CredentialsJson field if non-nil, zero value otherwise.

### GetCredentialsJsonOk

`func (o *RoutesV2InputConfigSecrets) GetCredentialsJsonOk() (*string, bool)`

GetCredentialsJsonOk returns a tuple with the CredentialsJson field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredentialsJson

`func (o *RoutesV2InputConfigSecrets) SetCredentialsJson(v string)`

SetCredentialsJson sets CredentialsJson field to given value.

### HasCredentialsJson

`func (o *RoutesV2InputConfigSecrets) HasCredentialsJson() bool`

HasCredentialsJson returns a boolean if a field has been set.

### GetIntegrationKey

`func (o *RoutesV2InputConfigSecrets) GetIntegrationKey() string`

GetIntegrationKey returns the IntegrationKey field if non-nil, zero value otherwise.

### GetIntegrationKeyOk

`func (o *RoutesV2InputConfigSecrets) GetIntegrationKeyOk() (*string, bool)`

GetIntegrationKeyOk returns a tuple with the IntegrationKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegrationKey

`func (o *RoutesV2InputConfigSecrets) SetIntegrationKey(v string)`

SetIntegrationKey sets IntegrationKey field to given value.

### HasIntegrationKey

`func (o *RoutesV2InputConfigSecrets) HasIntegrationKey() bool`

HasIntegrationKey returns a boolean if a field has been set.

### GetSecretKey

`func (o *RoutesV2InputConfigSecrets) GetSecretKey() string`

GetSecretKey returns the SecretKey field if non-nil, zero value otherwise.

### GetSecretKeyOk

`func (o *RoutesV2InputConfigSecrets) GetSecretKeyOk() (*string, bool)`

GetSecretKeyOk returns a tuple with the SecretKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecretKey

`func (o *RoutesV2InputConfigSecrets) SetSecretKey(v string)`

SetSecretKey sets SecretKey field to given value.

### HasSecretKey

`func (o *RoutesV2InputConfigSecrets) HasSecretKey() bool`

HasSecretKey returns a boolean if a field has been set.

### GetPersonalAccessToken

`func (o *RoutesV2InputConfigSecrets) GetPersonalAccessToken() string`

GetPersonalAccessToken returns the PersonalAccessToken field if non-nil, zero value otherwise.

### GetPersonalAccessTokenOk

`func (o *RoutesV2InputConfigSecrets) GetPersonalAccessTokenOk() (*string, bool)`

GetPersonalAccessTokenOk returns a tuple with the PersonalAccessToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPersonalAccessToken

`func (o *RoutesV2InputConfigSecrets) SetPersonalAccessToken(v string)`

SetPersonalAccessToken sets PersonalAccessToken field to given value.

### HasPersonalAccessToken

`func (o *RoutesV2InputConfigSecrets) HasPersonalAccessToken() bool`

HasPersonalAccessToken returns a boolean if a field has been set.

### GetEnterpriseId

`func (o *RoutesV2InputConfigSecrets) GetEnterpriseId() string`

GetEnterpriseId returns the EnterpriseId field if non-nil, zero value otherwise.

### GetEnterpriseIdOk

`func (o *RoutesV2InputConfigSecrets) GetEnterpriseIdOk() (*string, bool)`

GetEnterpriseIdOk returns a tuple with the EnterpriseId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnterpriseId

`func (o *RoutesV2InputConfigSecrets) SetEnterpriseId(v string)`

SetEnterpriseId sets EnterpriseId field to given value.

### HasEnterpriseId

`func (o *RoutesV2InputConfigSecrets) HasEnterpriseId() bool`

HasEnterpriseId returns a boolean if a field has been set.

### GetApiKey

`func (o *RoutesV2InputConfigSecrets) GetApiKey() string`

GetApiKey returns the ApiKey field if non-nil, zero value otherwise.

### GetApiKeyOk

`func (o *RoutesV2InputConfigSecrets) GetApiKeyOk() (*string, bool)`

GetApiKeyOk returns a tuple with the ApiKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiKey

`func (o *RoutesV2InputConfigSecrets) SetApiKey(v string)`

SetApiKey sets ApiKey field to given value.

### HasApiKey

`func (o *RoutesV2InputConfigSecrets) HasApiKey() bool`

HasApiKey returns a boolean if a field has been set.

### GetToken

`func (o *RoutesV2InputConfigSecrets) GetToken() string`

GetToken returns the Token field if non-nil, zero value otherwise.

### GetTokenOk

`func (o *RoutesV2InputConfigSecrets) GetTokenOk() (*string, bool)`

GetTokenOk returns a tuple with the Token field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToken

`func (o *RoutesV2InputConfigSecrets) SetToken(v string)`

SetToken sets Token field to given value.

### HasToken

`func (o *RoutesV2InputConfigSecrets) HasToken() bool`

HasToken returns a boolean if a field has been set.

### GetAccessKey

`func (o *RoutesV2InputConfigSecrets) GetAccessKey() string`

GetAccessKey returns the AccessKey field if non-nil, zero value otherwise.

### GetAccessKeyOk

`func (o *RoutesV2InputConfigSecrets) GetAccessKeyOk() (*string, bool)`

GetAccessKeyOk returns a tuple with the AccessKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessKey

`func (o *RoutesV2InputConfigSecrets) SetAccessKey(v string)`

SetAccessKey sets AccessKey field to given value.

### HasAccessKey

`func (o *RoutesV2InputConfigSecrets) HasAccessKey() bool`

HasAccessKey returns a boolean if a field has been set.

### GetCustomerId

`func (o *RoutesV2InputConfigSecrets) GetCustomerId() string`

GetCustomerId returns the CustomerId field if non-nil, zero value otherwise.

### GetCustomerIdOk

`func (o *RoutesV2InputConfigSecrets) GetCustomerIdOk() (*string, bool)`

GetCustomerIdOk returns a tuple with the CustomerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerId

`func (o *RoutesV2InputConfigSecrets) SetCustomerId(v string)`

SetCustomerId sets CustomerId field to given value.

### HasCustomerId

`func (o *RoutesV2InputConfigSecrets) HasCustomerId() bool`

HasCustomerId returns a boolean if a field has been set.

### GetDomain

`func (o *RoutesV2InputConfigSecrets) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *RoutesV2InputConfigSecrets) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *RoutesV2InputConfigSecrets) SetDomain(v string)`

SetDomain sets Domain field to given value.

### HasDomain

`func (o *RoutesV2InputConfigSecrets) HasDomain() bool`

HasDomain returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


