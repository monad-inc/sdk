# SnowflakeOutputSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Account** | Pointer to **string** | The unique identifier for your Snowflake account, typically in the form of &#39;organization-account_name&#39;. | [optional] 
**AuthType** | Pointer to **string** |  | [optional] 
**BatchConfig** | Pointer to [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | [optional] 
**CaseInsensitivity** | Pointer to **bool** | Treat column names as case-insensitive (convert to uppercase) to match Snowflake&#39;s default behavior. | [optional] 
**Database** | Pointer to **string** | The name of the Snowflake database to connect to and perform operations on | [optional] 
**Role** | Pointer to **string** | The name of the Role your service account was granted which can access your resources. | [optional] 
**Schema** | Pointer to **string** | The schema within the Snowflake database where the target table resides. | [optional] 
**Stage** | Pointer to **string** | The name of the Snowflake stage where the data will be copied to. Monad create or replace the stage. | [optional] 
**Table** | Pointer to **string** | The name of the table in Snowflake where the data will be written. If the table doesn&#39;t exist Monad will create the table. | [optional] 
**User** | Pointer to **string** | The username of the Snowflake account used to establish the connection. | [optional] 
**Warehouse** | Pointer to **string** | The Snowflake virtual warehouse to use for executing queries and processing data. | [optional] 

## Methods

### NewSnowflakeOutputSettingsConfig

`func NewSnowflakeOutputSettingsConfig() *SnowflakeOutputSettingsConfig`

NewSnowflakeOutputSettingsConfig instantiates a new SnowflakeOutputSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSnowflakeOutputSettingsConfigWithDefaults

`func NewSnowflakeOutputSettingsConfigWithDefaults() *SnowflakeOutputSettingsConfig`

NewSnowflakeOutputSettingsConfigWithDefaults instantiates a new SnowflakeOutputSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccount

`func (o *SnowflakeOutputSettingsConfig) GetAccount() string`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *SnowflakeOutputSettingsConfig) GetAccountOk() (*string, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *SnowflakeOutputSettingsConfig) SetAccount(v string)`

SetAccount sets Account field to given value.

### HasAccount

`func (o *SnowflakeOutputSettingsConfig) HasAccount() bool`

HasAccount returns a boolean if a field has been set.

### GetAuthType

`func (o *SnowflakeOutputSettingsConfig) GetAuthType() string`

GetAuthType returns the AuthType field if non-nil, zero value otherwise.

### GetAuthTypeOk

`func (o *SnowflakeOutputSettingsConfig) GetAuthTypeOk() (*string, bool)`

GetAuthTypeOk returns a tuple with the AuthType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthType

`func (o *SnowflakeOutputSettingsConfig) SetAuthType(v string)`

SetAuthType sets AuthType field to given value.

### HasAuthType

`func (o *SnowflakeOutputSettingsConfig) HasAuthType() bool`

HasAuthType returns a boolean if a field has been set.

### GetBatchConfig

`func (o *SnowflakeOutputSettingsConfig) GetBatchConfig() BatchConfigBatchConfig`

GetBatchConfig returns the BatchConfig field if non-nil, zero value otherwise.

### GetBatchConfigOk

`func (o *SnowflakeOutputSettingsConfig) GetBatchConfigOk() (*BatchConfigBatchConfig, bool)`

GetBatchConfigOk returns a tuple with the BatchConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchConfig

`func (o *SnowflakeOutputSettingsConfig) SetBatchConfig(v BatchConfigBatchConfig)`

SetBatchConfig sets BatchConfig field to given value.

### HasBatchConfig

`func (o *SnowflakeOutputSettingsConfig) HasBatchConfig() bool`

HasBatchConfig returns a boolean if a field has been set.

### GetCaseInsensitivity

`func (o *SnowflakeOutputSettingsConfig) GetCaseInsensitivity() bool`

GetCaseInsensitivity returns the CaseInsensitivity field if non-nil, zero value otherwise.

### GetCaseInsensitivityOk

`func (o *SnowflakeOutputSettingsConfig) GetCaseInsensitivityOk() (*bool, bool)`

GetCaseInsensitivityOk returns a tuple with the CaseInsensitivity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCaseInsensitivity

`func (o *SnowflakeOutputSettingsConfig) SetCaseInsensitivity(v bool)`

SetCaseInsensitivity sets CaseInsensitivity field to given value.

### HasCaseInsensitivity

`func (o *SnowflakeOutputSettingsConfig) HasCaseInsensitivity() bool`

HasCaseInsensitivity returns a boolean if a field has been set.

### GetDatabase

`func (o *SnowflakeOutputSettingsConfig) GetDatabase() string`

GetDatabase returns the Database field if non-nil, zero value otherwise.

### GetDatabaseOk

`func (o *SnowflakeOutputSettingsConfig) GetDatabaseOk() (*string, bool)`

GetDatabaseOk returns a tuple with the Database field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatabase

`func (o *SnowflakeOutputSettingsConfig) SetDatabase(v string)`

SetDatabase sets Database field to given value.

### HasDatabase

`func (o *SnowflakeOutputSettingsConfig) HasDatabase() bool`

HasDatabase returns a boolean if a field has been set.

### GetRole

`func (o *SnowflakeOutputSettingsConfig) GetRole() string`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *SnowflakeOutputSettingsConfig) GetRoleOk() (*string, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *SnowflakeOutputSettingsConfig) SetRole(v string)`

SetRole sets Role field to given value.

### HasRole

`func (o *SnowflakeOutputSettingsConfig) HasRole() bool`

HasRole returns a boolean if a field has been set.

### GetSchema

`func (o *SnowflakeOutputSettingsConfig) GetSchema() string`

GetSchema returns the Schema field if non-nil, zero value otherwise.

### GetSchemaOk

`func (o *SnowflakeOutputSettingsConfig) GetSchemaOk() (*string, bool)`

GetSchemaOk returns a tuple with the Schema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchema

`func (o *SnowflakeOutputSettingsConfig) SetSchema(v string)`

SetSchema sets Schema field to given value.

### HasSchema

`func (o *SnowflakeOutputSettingsConfig) HasSchema() bool`

HasSchema returns a boolean if a field has been set.

### GetStage

`func (o *SnowflakeOutputSettingsConfig) GetStage() string`

GetStage returns the Stage field if non-nil, zero value otherwise.

### GetStageOk

`func (o *SnowflakeOutputSettingsConfig) GetStageOk() (*string, bool)`

GetStageOk returns a tuple with the Stage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStage

`func (o *SnowflakeOutputSettingsConfig) SetStage(v string)`

SetStage sets Stage field to given value.

### HasStage

`func (o *SnowflakeOutputSettingsConfig) HasStage() bool`

HasStage returns a boolean if a field has been set.

### GetTable

`func (o *SnowflakeOutputSettingsConfig) GetTable() string`

GetTable returns the Table field if non-nil, zero value otherwise.

### GetTableOk

`func (o *SnowflakeOutputSettingsConfig) GetTableOk() (*string, bool)`

GetTableOk returns a tuple with the Table field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTable

`func (o *SnowflakeOutputSettingsConfig) SetTable(v string)`

SetTable sets Table field to given value.

### HasTable

`func (o *SnowflakeOutputSettingsConfig) HasTable() bool`

HasTable returns a boolean if a field has been set.

### GetUser

`func (o *SnowflakeOutputSettingsConfig) GetUser() string`

GetUser returns the User field if non-nil, zero value otherwise.

### GetUserOk

`func (o *SnowflakeOutputSettingsConfig) GetUserOk() (*string, bool)`

GetUserOk returns a tuple with the User field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUser

`func (o *SnowflakeOutputSettingsConfig) SetUser(v string)`

SetUser sets User field to given value.

### HasUser

`func (o *SnowflakeOutputSettingsConfig) HasUser() bool`

HasUser returns a boolean if a field has been set.

### GetWarehouse

`func (o *SnowflakeOutputSettingsConfig) GetWarehouse() string`

GetWarehouse returns the Warehouse field if non-nil, zero value otherwise.

### GetWarehouseOk

`func (o *SnowflakeOutputSettingsConfig) GetWarehouseOk() (*string, bool)`

GetWarehouseOk returns a tuple with the Warehouse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarehouse

`func (o *SnowflakeOutputSettingsConfig) SetWarehouse(v string)`

SetWarehouse sets Warehouse field to given value.

### HasWarehouse

`func (o *SnowflakeOutputSettingsConfig) HasWarehouse() bool`

HasWarehouse returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


