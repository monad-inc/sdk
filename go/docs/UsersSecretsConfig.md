# UsersSecretsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CredentialsJson** | Pointer to **string** | JSON credentials to authenticate with Google Cloud. | [optional] 
**CustomerId** | Pointer to **string** | Google Workspace Customer ID. If you use your google workspace customer ID you will pull data on all users in all domains of your Google Workspace account. This should be set if Domain is not set. | [optional] 
**Domain** | Pointer to **string** | Domain name your users belong to. If you use a google workspace domain you will only pull user data for users that belong to that domain. This should be set if CustomerID is not set | [optional] 

## Methods

### NewUsersSecretsConfig

`func NewUsersSecretsConfig() *UsersSecretsConfig`

NewUsersSecretsConfig instantiates a new UsersSecretsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUsersSecretsConfigWithDefaults

`func NewUsersSecretsConfigWithDefaults() *UsersSecretsConfig`

NewUsersSecretsConfigWithDefaults instantiates a new UsersSecretsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCredentialsJson

`func (o *UsersSecretsConfig) GetCredentialsJson() string`

GetCredentialsJson returns the CredentialsJson field if non-nil, zero value otherwise.

### GetCredentialsJsonOk

`func (o *UsersSecretsConfig) GetCredentialsJsonOk() (*string, bool)`

GetCredentialsJsonOk returns a tuple with the CredentialsJson field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredentialsJson

`func (o *UsersSecretsConfig) SetCredentialsJson(v string)`

SetCredentialsJson sets CredentialsJson field to given value.

### HasCredentialsJson

`func (o *UsersSecretsConfig) HasCredentialsJson() bool`

HasCredentialsJson returns a boolean if a field has been set.

### GetCustomerId

`func (o *UsersSecretsConfig) GetCustomerId() string`

GetCustomerId returns the CustomerId field if non-nil, zero value otherwise.

### GetCustomerIdOk

`func (o *UsersSecretsConfig) GetCustomerIdOk() (*string, bool)`

GetCustomerIdOk returns a tuple with the CustomerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomerId

`func (o *UsersSecretsConfig) SetCustomerId(v string)`

SetCustomerId sets CustomerId field to given value.

### HasCustomerId

`func (o *UsersSecretsConfig) HasCustomerId() bool`

HasCustomerId returns a boolean if a field has been set.

### GetDomain

`func (o *UsersSecretsConfig) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *UsersSecretsConfig) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *UsersSecretsConfig) SetDomain(v string)`

SetDomain sets Domain field to given value.

### HasDomain

`func (o *UsersSecretsConfig) HasDomain() bool`

HasDomain returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


