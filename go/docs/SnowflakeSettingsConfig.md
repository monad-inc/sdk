# SnowflakeSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Account** | Pointer to **string** | The unique identifier for your Snowflake account, typically in the form of &#39;organization-account_name&#39;. | [optional] 
**AuthType** | Pointer to **string** | AuthType specifies the authentication method to use when connecting to Snowflake. Supported values are: - Password: Uses username and password authentication - Private Key: Uses key pair authentication with private/public key pair | [optional] 
**Cron** | Pointer to **string** | Cron expression for scheduling the input | [optional] 
**Role** | Pointer to **string** | The name of the Role your service account was granted which can access your resources. | [optional] 
**User** | Pointer to **string** | User specifies the username for authentication to Snowflake. | [optional] 

## Methods

### NewSnowflakeSettingsConfig

`func NewSnowflakeSettingsConfig() *SnowflakeSettingsConfig`

NewSnowflakeSettingsConfig instantiates a new SnowflakeSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSnowflakeSettingsConfigWithDefaults

`func NewSnowflakeSettingsConfigWithDefaults() *SnowflakeSettingsConfig`

NewSnowflakeSettingsConfigWithDefaults instantiates a new SnowflakeSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccount

`func (o *SnowflakeSettingsConfig) GetAccount() string`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *SnowflakeSettingsConfig) GetAccountOk() (*string, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *SnowflakeSettingsConfig) SetAccount(v string)`

SetAccount sets Account field to given value.

### HasAccount

`func (o *SnowflakeSettingsConfig) HasAccount() bool`

HasAccount returns a boolean if a field has been set.

### GetAuthType

`func (o *SnowflakeSettingsConfig) GetAuthType() string`

GetAuthType returns the AuthType field if non-nil, zero value otherwise.

### GetAuthTypeOk

`func (o *SnowflakeSettingsConfig) GetAuthTypeOk() (*string, bool)`

GetAuthTypeOk returns a tuple with the AuthType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthType

`func (o *SnowflakeSettingsConfig) SetAuthType(v string)`

SetAuthType sets AuthType field to given value.

### HasAuthType

`func (o *SnowflakeSettingsConfig) HasAuthType() bool`

HasAuthType returns a boolean if a field has been set.

### GetCron

`func (o *SnowflakeSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *SnowflakeSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *SnowflakeSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *SnowflakeSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetRole

`func (o *SnowflakeSettingsConfig) GetRole() string`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *SnowflakeSettingsConfig) GetRoleOk() (*string, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *SnowflakeSettingsConfig) SetRole(v string)`

SetRole sets Role field to given value.

### HasRole

`func (o *SnowflakeSettingsConfig) HasRole() bool`

HasRole returns a boolean if a field has been set.

### GetUser

`func (o *SnowflakeSettingsConfig) GetUser() string`

GetUser returns the User field if non-nil, zero value otherwise.

### GetUserOk

`func (o *SnowflakeSettingsConfig) GetUserOk() (*string, bool)`

GetUserOk returns a tuple with the User field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUser

`func (o *SnowflakeSettingsConfig) SetUser(v string)`

SetUser sets User field to given value.

### HasUser

`func (o *SnowflakeSettingsConfig) HasUser() bool`

HasUser returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


