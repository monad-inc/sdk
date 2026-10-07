# PostgresqlSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ColumnNames** | Pointer to **[]string** | The column names to write data to, must match the root fields of the data If not provided all root fields will be used | [optional] 
**Database** | Pointer to **string** | The database name to connect to | [optional] 
**Host** | Pointer to **string** | The host of the PostgreSQL database | [optional] 
**Port** | Pointer to **int32** | The port of the PostgreSQL database | [optional] 
**Table** | Pointer to **string** | The table name to write data to | [optional] 
**User** | Pointer to **string** | The user to connect to the PostgreSQL database | [optional] 

## Methods

### NewPostgresqlSettingsConfig

`func NewPostgresqlSettingsConfig() *PostgresqlSettingsConfig`

NewPostgresqlSettingsConfig instantiates a new PostgresqlSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostgresqlSettingsConfigWithDefaults

`func NewPostgresqlSettingsConfigWithDefaults() *PostgresqlSettingsConfig`

NewPostgresqlSettingsConfigWithDefaults instantiates a new PostgresqlSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetColumnNames

`func (o *PostgresqlSettingsConfig) GetColumnNames() []string`

GetColumnNames returns the ColumnNames field if non-nil, zero value otherwise.

### GetColumnNamesOk

`func (o *PostgresqlSettingsConfig) GetColumnNamesOk() (*[]string, bool)`

GetColumnNamesOk returns a tuple with the ColumnNames field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColumnNames

`func (o *PostgresqlSettingsConfig) SetColumnNames(v []string)`

SetColumnNames sets ColumnNames field to given value.

### HasColumnNames

`func (o *PostgresqlSettingsConfig) HasColumnNames() bool`

HasColumnNames returns a boolean if a field has been set.

### GetDatabase

`func (o *PostgresqlSettingsConfig) GetDatabase() string`

GetDatabase returns the Database field if non-nil, zero value otherwise.

### GetDatabaseOk

`func (o *PostgresqlSettingsConfig) GetDatabaseOk() (*string, bool)`

GetDatabaseOk returns a tuple with the Database field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatabase

`func (o *PostgresqlSettingsConfig) SetDatabase(v string)`

SetDatabase sets Database field to given value.

### HasDatabase

`func (o *PostgresqlSettingsConfig) HasDatabase() bool`

HasDatabase returns a boolean if a field has been set.

### GetHost

`func (o *PostgresqlSettingsConfig) GetHost() string`

GetHost returns the Host field if non-nil, zero value otherwise.

### GetHostOk

`func (o *PostgresqlSettingsConfig) GetHostOk() (*string, bool)`

GetHostOk returns a tuple with the Host field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHost

`func (o *PostgresqlSettingsConfig) SetHost(v string)`

SetHost sets Host field to given value.

### HasHost

`func (o *PostgresqlSettingsConfig) HasHost() bool`

HasHost returns a boolean if a field has been set.

### GetPort

`func (o *PostgresqlSettingsConfig) GetPort() int32`

GetPort returns the Port field if non-nil, zero value otherwise.

### GetPortOk

`func (o *PostgresqlSettingsConfig) GetPortOk() (*int32, bool)`

GetPortOk returns a tuple with the Port field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPort

`func (o *PostgresqlSettingsConfig) SetPort(v int32)`

SetPort sets Port field to given value.

### HasPort

`func (o *PostgresqlSettingsConfig) HasPort() bool`

HasPort returns a boolean if a field has been set.

### GetTable

`func (o *PostgresqlSettingsConfig) GetTable() string`

GetTable returns the Table field if non-nil, zero value otherwise.

### GetTableOk

`func (o *PostgresqlSettingsConfig) GetTableOk() (*string, bool)`

GetTableOk returns a tuple with the Table field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTable

`func (o *PostgresqlSettingsConfig) SetTable(v string)`

SetTable sets Table field to given value.

### HasTable

`func (o *PostgresqlSettingsConfig) HasTable() bool`

HasTable returns a boolean if a field has been set.

### GetUser

`func (o *PostgresqlSettingsConfig) GetUser() string`

GetUser returns the User field if non-nil, zero value otherwise.

### GetUserOk

`func (o *PostgresqlSettingsConfig) GetUserOk() (*string, bool)`

GetUserOk returns a tuple with the User field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUser

`func (o *PostgresqlSettingsConfig) SetUser(v string)`

SetUser sets User field to given value.

### HasUser

`func (o *PostgresqlSettingsConfig) HasUser() bool`

HasUser returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


