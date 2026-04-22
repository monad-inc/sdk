# DatabricksSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchConfig** | Pointer to [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | [optional] 
**Catalog** | Pointer to **string** | The Unity Catalog name | [optional] 
**HttpPath** | Pointer to **string** | The SQL warehouse HTTP path from connection details (e.g. /sql/1.0/warehouses/abc123) | [optional] 
**Schema** | Pointer to **string** | The target schema within the catalog | [optional] 
**ServerHostname** | Pointer to **string** | The Databricks workspace hostname (e.g. adb-1234567890.azuredatabricks.net) | [optional] 
**Table** | Pointer to **string** | The target Delta table name. If the table doesn&#39;t exist, Monad will create it. | [optional] 
**Volume** | Pointer to **string** | The Unity Catalog Volume used for staging JSONL files before COPY INTO | [optional] 

## Methods

### NewDatabricksSettingsConfig

`func NewDatabricksSettingsConfig() *DatabricksSettingsConfig`

NewDatabricksSettingsConfig instantiates a new DatabricksSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDatabricksSettingsConfigWithDefaults

`func NewDatabricksSettingsConfigWithDefaults() *DatabricksSettingsConfig`

NewDatabricksSettingsConfigWithDefaults instantiates a new DatabricksSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBatchConfig

`func (o *DatabricksSettingsConfig) GetBatchConfig() BatchConfigBatchConfig`

GetBatchConfig returns the BatchConfig field if non-nil, zero value otherwise.

### GetBatchConfigOk

`func (o *DatabricksSettingsConfig) GetBatchConfigOk() (*BatchConfigBatchConfig, bool)`

GetBatchConfigOk returns a tuple with the BatchConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchConfig

`func (o *DatabricksSettingsConfig) SetBatchConfig(v BatchConfigBatchConfig)`

SetBatchConfig sets BatchConfig field to given value.

### HasBatchConfig

`func (o *DatabricksSettingsConfig) HasBatchConfig() bool`

HasBatchConfig returns a boolean if a field has been set.

### GetCatalog

`func (o *DatabricksSettingsConfig) GetCatalog() string`

GetCatalog returns the Catalog field if non-nil, zero value otherwise.

### GetCatalogOk

`func (o *DatabricksSettingsConfig) GetCatalogOk() (*string, bool)`

GetCatalogOk returns a tuple with the Catalog field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCatalog

`func (o *DatabricksSettingsConfig) SetCatalog(v string)`

SetCatalog sets Catalog field to given value.

### HasCatalog

`func (o *DatabricksSettingsConfig) HasCatalog() bool`

HasCatalog returns a boolean if a field has been set.

### GetHttpPath

`func (o *DatabricksSettingsConfig) GetHttpPath() string`

GetHttpPath returns the HttpPath field if non-nil, zero value otherwise.

### GetHttpPathOk

`func (o *DatabricksSettingsConfig) GetHttpPathOk() (*string, bool)`

GetHttpPathOk returns a tuple with the HttpPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHttpPath

`func (o *DatabricksSettingsConfig) SetHttpPath(v string)`

SetHttpPath sets HttpPath field to given value.

### HasHttpPath

`func (o *DatabricksSettingsConfig) HasHttpPath() bool`

HasHttpPath returns a boolean if a field has been set.

### GetSchema

`func (o *DatabricksSettingsConfig) GetSchema() string`

GetSchema returns the Schema field if non-nil, zero value otherwise.

### GetSchemaOk

`func (o *DatabricksSettingsConfig) GetSchemaOk() (*string, bool)`

GetSchemaOk returns a tuple with the Schema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchema

`func (o *DatabricksSettingsConfig) SetSchema(v string)`

SetSchema sets Schema field to given value.

### HasSchema

`func (o *DatabricksSettingsConfig) HasSchema() bool`

HasSchema returns a boolean if a field has been set.

### GetServerHostname

`func (o *DatabricksSettingsConfig) GetServerHostname() string`

GetServerHostname returns the ServerHostname field if non-nil, zero value otherwise.

### GetServerHostnameOk

`func (o *DatabricksSettingsConfig) GetServerHostnameOk() (*string, bool)`

GetServerHostnameOk returns a tuple with the ServerHostname field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServerHostname

`func (o *DatabricksSettingsConfig) SetServerHostname(v string)`

SetServerHostname sets ServerHostname field to given value.

### HasServerHostname

`func (o *DatabricksSettingsConfig) HasServerHostname() bool`

HasServerHostname returns a boolean if a field has been set.

### GetTable

`func (o *DatabricksSettingsConfig) GetTable() string`

GetTable returns the Table field if non-nil, zero value otherwise.

### GetTableOk

`func (o *DatabricksSettingsConfig) GetTableOk() (*string, bool)`

GetTableOk returns a tuple with the Table field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTable

`func (o *DatabricksSettingsConfig) SetTable(v string)`

SetTable sets Table field to given value.

### HasTable

`func (o *DatabricksSettingsConfig) HasTable() bool`

HasTable returns a boolean if a field has been set.

### GetVolume

`func (o *DatabricksSettingsConfig) GetVolume() string`

GetVolume returns the Volume field if non-nil, zero value otherwise.

### GetVolumeOk

`func (o *DatabricksSettingsConfig) GetVolumeOk() (*string, bool)`

GetVolumeOk returns a tuple with the Volume field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVolume

`func (o *DatabricksSettingsConfig) SetVolume(v string)`

SetVolume sets Volume field to given value.

### HasVolume

`func (o *DatabricksSettingsConfig) HasVolume() bool`

HasVolume returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


