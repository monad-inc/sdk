# SnowflakeSnowpipeStreamingSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Account** | **string** | The unique identifier for your Snowflake account, e.g. &#39;orgname-account_name&#39;. | 
**BatchConfig** | Pointer to [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | [optional] 
**ChannelPrefix** | Pointer to **string** | Optional prefix for the channel name. Channels are named \&quot;{prefix}_{instanceID}_{i}\&quot; where instanceID is a fresh random ID per connector instance. Defaults to \&quot;monad\&quot;. | [optional] 
**Database** | **string** | The Snowflake database that contains the target pipe. | 
**Pipe** | **string** | The name of the pre-existing STREAMING pipe (created with DATA_SOURCE(TYPE &#x3D;&gt; &#39;STREAMING&#39;)). | 
**PrivateKey** | [**ModelsSecret**](ModelsSecret.md) |  | 
**Schema** | **string** | The schema within the database that contains the target pipe. | 
**User** | **string** | The username of the Snowflake account used to authenticate. The user&#39;s DEFAULT_ROLE must be set to a role with access to the pipe. | 

## Methods

### NewSnowflakeSnowpipeStreamingSettingsConfig

`func NewSnowflakeSnowpipeStreamingSettingsConfig(account string, database string, pipe string, privateKey ModelsSecret, schema string, user string, ) *SnowflakeSnowpipeStreamingSettingsConfig`

NewSnowflakeSnowpipeStreamingSettingsConfig instantiates a new SnowflakeSnowpipeStreamingSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSnowflakeSnowpipeStreamingSettingsConfigWithDefaults

`func NewSnowflakeSnowpipeStreamingSettingsConfigWithDefaults() *SnowflakeSnowpipeStreamingSettingsConfig`

NewSnowflakeSnowpipeStreamingSettingsConfigWithDefaults instantiates a new SnowflakeSnowpipeStreamingSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccount

`func (o *SnowflakeSnowpipeStreamingSettingsConfig) GetAccount() string`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *SnowflakeSnowpipeStreamingSettingsConfig) GetAccountOk() (*string, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *SnowflakeSnowpipeStreamingSettingsConfig) SetAccount(v string)`

SetAccount sets Account field to given value.


### GetBatchConfig

`func (o *SnowflakeSnowpipeStreamingSettingsConfig) GetBatchConfig() BatchConfigBatchConfig`

GetBatchConfig returns the BatchConfig field if non-nil, zero value otherwise.

### GetBatchConfigOk

`func (o *SnowflakeSnowpipeStreamingSettingsConfig) GetBatchConfigOk() (*BatchConfigBatchConfig, bool)`

GetBatchConfigOk returns a tuple with the BatchConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchConfig

`func (o *SnowflakeSnowpipeStreamingSettingsConfig) SetBatchConfig(v BatchConfigBatchConfig)`

SetBatchConfig sets BatchConfig field to given value.

### HasBatchConfig

`func (o *SnowflakeSnowpipeStreamingSettingsConfig) HasBatchConfig() bool`

HasBatchConfig returns a boolean if a field has been set.

### GetChannelPrefix

`func (o *SnowflakeSnowpipeStreamingSettingsConfig) GetChannelPrefix() string`

GetChannelPrefix returns the ChannelPrefix field if non-nil, zero value otherwise.

### GetChannelPrefixOk

`func (o *SnowflakeSnowpipeStreamingSettingsConfig) GetChannelPrefixOk() (*string, bool)`

GetChannelPrefixOk returns a tuple with the ChannelPrefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelPrefix

`func (o *SnowflakeSnowpipeStreamingSettingsConfig) SetChannelPrefix(v string)`

SetChannelPrefix sets ChannelPrefix field to given value.

### HasChannelPrefix

`func (o *SnowflakeSnowpipeStreamingSettingsConfig) HasChannelPrefix() bool`

HasChannelPrefix returns a boolean if a field has been set.

### GetDatabase

`func (o *SnowflakeSnowpipeStreamingSettingsConfig) GetDatabase() string`

GetDatabase returns the Database field if non-nil, zero value otherwise.

### GetDatabaseOk

`func (o *SnowflakeSnowpipeStreamingSettingsConfig) GetDatabaseOk() (*string, bool)`

GetDatabaseOk returns a tuple with the Database field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatabase

`func (o *SnowflakeSnowpipeStreamingSettingsConfig) SetDatabase(v string)`

SetDatabase sets Database field to given value.


### GetPipe

`func (o *SnowflakeSnowpipeStreamingSettingsConfig) GetPipe() string`

GetPipe returns the Pipe field if non-nil, zero value otherwise.

### GetPipeOk

`func (o *SnowflakeSnowpipeStreamingSettingsConfig) GetPipeOk() (*string, bool)`

GetPipeOk returns a tuple with the Pipe field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPipe

`func (o *SnowflakeSnowpipeStreamingSettingsConfig) SetPipe(v string)`

SetPipe sets Pipe field to given value.


### GetPrivateKey

`func (o *SnowflakeSnowpipeStreamingSettingsConfig) GetPrivateKey() ModelsSecret`

GetPrivateKey returns the PrivateKey field if non-nil, zero value otherwise.

### GetPrivateKeyOk

`func (o *SnowflakeSnowpipeStreamingSettingsConfig) GetPrivateKeyOk() (*ModelsSecret, bool)`

GetPrivateKeyOk returns a tuple with the PrivateKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivateKey

`func (o *SnowflakeSnowpipeStreamingSettingsConfig) SetPrivateKey(v ModelsSecret)`

SetPrivateKey sets PrivateKey field to given value.


### GetSchema

`func (o *SnowflakeSnowpipeStreamingSettingsConfig) GetSchema() string`

GetSchema returns the Schema field if non-nil, zero value otherwise.

### GetSchemaOk

`func (o *SnowflakeSnowpipeStreamingSettingsConfig) GetSchemaOk() (*string, bool)`

GetSchemaOk returns a tuple with the Schema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchema

`func (o *SnowflakeSnowpipeStreamingSettingsConfig) SetSchema(v string)`

SetSchema sets Schema field to given value.


### GetUser

`func (o *SnowflakeSnowpipeStreamingSettingsConfig) GetUser() string`

GetUser returns the User field if non-nil, zero value otherwise.

### GetUserOk

`func (o *SnowflakeSnowpipeStreamingSettingsConfig) GetUserOk() (*string, bool)`

GetUserOk returns a tuple with the User field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUser

`func (o *SnowflakeSnowpipeStreamingSettingsConfig) SetUser(v string)`

SetUser sets User field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


