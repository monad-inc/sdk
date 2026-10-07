# PostgresqlSecretsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConnectionString** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**Password** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Methods

### NewPostgresqlSecretsConfig

`func NewPostgresqlSecretsConfig() *PostgresqlSecretsConfig`

NewPostgresqlSecretsConfig instantiates a new PostgresqlSecretsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostgresqlSecretsConfigWithDefaults

`func NewPostgresqlSecretsConfigWithDefaults() *PostgresqlSecretsConfig`

NewPostgresqlSecretsConfigWithDefaults instantiates a new PostgresqlSecretsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConnectionString

`func (o *PostgresqlSecretsConfig) GetConnectionString() ModelsSecret`

GetConnectionString returns the ConnectionString field if non-nil, zero value otherwise.

### GetConnectionStringOk

`func (o *PostgresqlSecretsConfig) GetConnectionStringOk() (*ModelsSecret, bool)`

GetConnectionStringOk returns a tuple with the ConnectionString field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionString

`func (o *PostgresqlSecretsConfig) SetConnectionString(v ModelsSecret)`

SetConnectionString sets ConnectionString field to given value.

### HasConnectionString

`func (o *PostgresqlSecretsConfig) HasConnectionString() bool`

HasConnectionString returns a boolean if a field has been set.

### GetPassword

`func (o *PostgresqlSecretsConfig) GetPassword() ModelsSecret`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *PostgresqlSecretsConfig) GetPasswordOk() (*ModelsSecret, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *PostgresqlSecretsConfig) SetPassword(v ModelsSecret)`

SetPassword sets Password field to given value.

### HasPassword

`func (o *PostgresqlSecretsConfig) HasPassword() bool`

HasPassword returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


