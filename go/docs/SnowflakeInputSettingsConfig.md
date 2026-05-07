# SnowflakeInputSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Account** | **string** | The unique identifier for your Snowflake account, typically in the form of &#39;organization-account_name&#39;. | 
**AuthType** | **string** | Authentication type: \&quot;password\&quot; or \&quot;private key\&quot; | 
**Cron** | **string** | Cron string for scheduling the ingest of your input | 
**Database** | **string** | The name of the Snowflake database to connect to and perform operations on | 
**Query** | Pointer to **string** | Optional custom query to use instead of table (must include timestamp_column) | [optional] 
**Role** | **string** | The name of the Role your service account was granted which can access your resources. | 
**Schema** | **string** | The schema within the Snowflake database where the target table resides. | 
**Table** | Pointer to **string** | The name of the table in Snowflake to query data from. | [optional] 
**TimestampColumn** | **string** | The column containing timestamp values used for incremental loading | 
**User** | **string** | The username of the Snowflake account used to establish the connection. | 
**Warehouse** | **string** | The Snowflake virtual warehouse to use for executing queries and processing data. | 

## Methods

### NewSnowflakeInputSettingsConfig

`func NewSnowflakeInputSettingsConfig(account string, authType string, cron string, database string, role string, schema string, timestampColumn string, user string, warehouse string, ) *SnowflakeInputSettingsConfig`

NewSnowflakeInputSettingsConfig instantiates a new SnowflakeInputSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSnowflakeInputSettingsConfigWithDefaults

`func NewSnowflakeInputSettingsConfigWithDefaults() *SnowflakeInputSettingsConfig`

NewSnowflakeInputSettingsConfigWithDefaults instantiates a new SnowflakeInputSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccount

`func (o *SnowflakeInputSettingsConfig) GetAccount() string`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *SnowflakeInputSettingsConfig) GetAccountOk() (*string, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *SnowflakeInputSettingsConfig) SetAccount(v string)`

SetAccount sets Account field to given value.


### GetAuthType

`func (o *SnowflakeInputSettingsConfig) GetAuthType() string`

GetAuthType returns the AuthType field if non-nil, zero value otherwise.

### GetAuthTypeOk

`func (o *SnowflakeInputSettingsConfig) GetAuthTypeOk() (*string, bool)`

GetAuthTypeOk returns a tuple with the AuthType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthType

`func (o *SnowflakeInputSettingsConfig) SetAuthType(v string)`

SetAuthType sets AuthType field to given value.


### GetCron

`func (o *SnowflakeInputSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *SnowflakeInputSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *SnowflakeInputSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.


### GetDatabase

`func (o *SnowflakeInputSettingsConfig) GetDatabase() string`

GetDatabase returns the Database field if non-nil, zero value otherwise.

### GetDatabaseOk

`func (o *SnowflakeInputSettingsConfig) GetDatabaseOk() (*string, bool)`

GetDatabaseOk returns a tuple with the Database field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatabase

`func (o *SnowflakeInputSettingsConfig) SetDatabase(v string)`

SetDatabase sets Database field to given value.


### GetQuery

`func (o *SnowflakeInputSettingsConfig) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *SnowflakeInputSettingsConfig) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *SnowflakeInputSettingsConfig) SetQuery(v string)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *SnowflakeInputSettingsConfig) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### GetRole

`func (o *SnowflakeInputSettingsConfig) GetRole() string`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *SnowflakeInputSettingsConfig) GetRoleOk() (*string, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *SnowflakeInputSettingsConfig) SetRole(v string)`

SetRole sets Role field to given value.


### GetSchema

`func (o *SnowflakeInputSettingsConfig) GetSchema() string`

GetSchema returns the Schema field if non-nil, zero value otherwise.

### GetSchemaOk

`func (o *SnowflakeInputSettingsConfig) GetSchemaOk() (*string, bool)`

GetSchemaOk returns a tuple with the Schema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchema

`func (o *SnowflakeInputSettingsConfig) SetSchema(v string)`

SetSchema sets Schema field to given value.


### GetTable

`func (o *SnowflakeInputSettingsConfig) GetTable() string`

GetTable returns the Table field if non-nil, zero value otherwise.

### GetTableOk

`func (o *SnowflakeInputSettingsConfig) GetTableOk() (*string, bool)`

GetTableOk returns a tuple with the Table field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTable

`func (o *SnowflakeInputSettingsConfig) SetTable(v string)`

SetTable sets Table field to given value.

### HasTable

`func (o *SnowflakeInputSettingsConfig) HasTable() bool`

HasTable returns a boolean if a field has been set.

### GetTimestampColumn

`func (o *SnowflakeInputSettingsConfig) GetTimestampColumn() string`

GetTimestampColumn returns the TimestampColumn field if non-nil, zero value otherwise.

### GetTimestampColumnOk

`func (o *SnowflakeInputSettingsConfig) GetTimestampColumnOk() (*string, bool)`

GetTimestampColumnOk returns a tuple with the TimestampColumn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestampColumn

`func (o *SnowflakeInputSettingsConfig) SetTimestampColumn(v string)`

SetTimestampColumn sets TimestampColumn field to given value.


### GetUser

`func (o *SnowflakeInputSettingsConfig) GetUser() string`

GetUser returns the User field if non-nil, zero value otherwise.

### GetUserOk

`func (o *SnowflakeInputSettingsConfig) GetUserOk() (*string, bool)`

GetUserOk returns a tuple with the User field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUser

`func (o *SnowflakeInputSettingsConfig) SetUser(v string)`

SetUser sets User field to given value.


### GetWarehouse

`func (o *SnowflakeInputSettingsConfig) GetWarehouse() string`

GetWarehouse returns the Warehouse field if non-nil, zero value otherwise.

### GetWarehouseOk

`func (o *SnowflakeInputSettingsConfig) GetWarehouseOk() (*string, bool)`

GetWarehouseOk returns a tuple with the Warehouse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarehouse

`func (o *SnowflakeInputSettingsConfig) SetWarehouse(v string)`

SetWarehouse sets Warehouse field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


