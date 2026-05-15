# DatabricksSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchConfig** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | 
**Catalog** | **string** | The Unity Catalog name | 
**HttpPath** | **string** | The SQL warehouse HTTP path from connection details (e.g. /sql/1.0/warehouses/abc123) | 
**Schema** | **string** | The target schema within the catalog | 
**ServerHostname** | **string** | The Databricks workspace hostname (e.g. adb-1234567890.azuredatabricks.net) | 
**Volume** | **string** | The Unity Catalog Volume used for staging JSONL files | 
**WriteMode** | [**DatabricksWriteMode**](DatabricksWriteMode.md) |  | 

## Methods

### NewDatabricksSettingsConfig

`func NewDatabricksSettingsConfig(batchConfig BatchConfigBatchConfig, catalog string, httpPath string, schema string, serverHostname string, volume string, writeMode DatabricksWriteMode, ) *DatabricksSettingsConfig`

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


### GetWriteMode

`func (o *DatabricksSettingsConfig) GetWriteMode() DatabricksWriteMode`

GetWriteMode returns the WriteMode field if non-nil, zero value otherwise.

### GetWriteModeOk

`func (o *DatabricksSettingsConfig) GetWriteModeOk() (*DatabricksWriteMode, bool)`

GetWriteModeOk returns a tuple with the WriteMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWriteMode

`func (o *DatabricksSettingsConfig) SetWriteMode(v DatabricksWriteMode)`

SetWriteMode sets WriteMode field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


