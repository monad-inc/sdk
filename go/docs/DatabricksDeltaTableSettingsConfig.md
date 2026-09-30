# DatabricksDeltaTableSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchConfig** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | 
**Catalog** | **string** | The Unity Catalog name | 
**Schema** | **string** | The target schema within the catalog | 
**ServerHostname** | **string** | The Databricks workspace hostname (e.g. adb-1234567890.azuredatabricks.net) | 
**WriteMode** | [**DatabricksDeltaTableWriteMode**](DatabricksDeltaTableWriteMode.md) |  | 

## Methods

### NewDatabricksDeltaTableSettingsConfig

`func NewDatabricksDeltaTableSettingsConfig(batchConfig BatchConfigBatchConfig, catalog string, schema string, serverHostname string, writeMode DatabricksDeltaTableWriteMode, ) *DatabricksDeltaTableSettingsConfig`

NewDatabricksDeltaTableSettingsConfig instantiates a new DatabricksDeltaTableSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDatabricksDeltaTableSettingsConfigWithDefaults

`func NewDatabricksDeltaTableSettingsConfigWithDefaults() *DatabricksDeltaTableSettingsConfig`

NewDatabricksDeltaTableSettingsConfigWithDefaults instantiates a new DatabricksDeltaTableSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBatchConfig

`func (o *DatabricksDeltaTableSettingsConfig) GetBatchConfig() BatchConfigBatchConfig`

GetBatchConfig returns the BatchConfig field if non-nil, zero value otherwise.

### GetBatchConfigOk

`func (o *DatabricksDeltaTableSettingsConfig) GetBatchConfigOk() (*BatchConfigBatchConfig, bool)`

GetBatchConfigOk returns a tuple with the BatchConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchConfig

`func (o *DatabricksDeltaTableSettingsConfig) SetBatchConfig(v BatchConfigBatchConfig)`

SetBatchConfig sets BatchConfig field to given value.


### GetCatalog

`func (o *DatabricksDeltaTableSettingsConfig) GetCatalog() string`

GetCatalog returns the Catalog field if non-nil, zero value otherwise.

### GetCatalogOk

`func (o *DatabricksDeltaTableSettingsConfig) GetCatalogOk() (*string, bool)`

GetCatalogOk returns a tuple with the Catalog field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCatalog

`func (o *DatabricksDeltaTableSettingsConfig) SetCatalog(v string)`

SetCatalog sets Catalog field to given value.


### GetSchema

`func (o *DatabricksDeltaTableSettingsConfig) GetSchema() string`

GetSchema returns the Schema field if non-nil, zero value otherwise.

### GetSchemaOk

`func (o *DatabricksDeltaTableSettingsConfig) GetSchemaOk() (*string, bool)`

GetSchemaOk returns a tuple with the Schema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchema

`func (o *DatabricksDeltaTableSettingsConfig) SetSchema(v string)`

SetSchema sets Schema field to given value.


### GetServerHostname

`func (o *DatabricksDeltaTableSettingsConfig) GetServerHostname() string`

GetServerHostname returns the ServerHostname field if non-nil, zero value otherwise.

### GetServerHostnameOk

`func (o *DatabricksDeltaTableSettingsConfig) GetServerHostnameOk() (*string, bool)`

GetServerHostnameOk returns a tuple with the ServerHostname field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServerHostname

`func (o *DatabricksDeltaTableSettingsConfig) SetServerHostname(v string)`

SetServerHostname sets ServerHostname field to given value.


### GetWriteMode

`func (o *DatabricksDeltaTableSettingsConfig) GetWriteMode() DatabricksDeltaTableWriteMode`

GetWriteMode returns the WriteMode field if non-nil, zero value otherwise.

### GetWriteModeOk

`func (o *DatabricksDeltaTableSettingsConfig) GetWriteModeOk() (*DatabricksDeltaTableWriteMode, bool)`

GetWriteModeOk returns a tuple with the WriteMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWriteMode

`func (o *DatabricksDeltaTableSettingsConfig) SetWriteMode(v DatabricksDeltaTableWriteMode)`

SetWriteMode sets WriteMode field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


