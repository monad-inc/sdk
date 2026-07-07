# DatabricksLakehouseSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchConfig** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | 
**Catalog** | **string** | The Unity Catalog name | 
**ClientId** | [**ModelsSecret**](ModelsSecret.md) |  | 
**ClientSecret** | [**ModelsSecret**](ModelsSecret.md) |  | 
**Schema** | **string** | The target schema within the catalog | 
**ServerHostname** | **string** | The Databricks workspace hostname (e.g. adb-1234567890.azuredatabricks.net) | 
**WriteMode** | [**DatabricksLakehouseWriteMode**](DatabricksLakehouseWriteMode.md) |  | 

## Methods

### NewDatabricksLakehouseSettingsConfig

`func NewDatabricksLakehouseSettingsConfig(batchConfig BatchConfigBatchConfig, catalog string, clientId ModelsSecret, clientSecret ModelsSecret, schema string, serverHostname string, writeMode DatabricksLakehouseWriteMode, ) *DatabricksLakehouseSettingsConfig`

NewDatabricksLakehouseSettingsConfig instantiates a new DatabricksLakehouseSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDatabricksLakehouseSettingsConfigWithDefaults

`func NewDatabricksLakehouseSettingsConfigWithDefaults() *DatabricksLakehouseSettingsConfig`

NewDatabricksLakehouseSettingsConfigWithDefaults instantiates a new DatabricksLakehouseSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBatchConfig

`func (o *DatabricksLakehouseSettingsConfig) GetBatchConfig() BatchConfigBatchConfig`

GetBatchConfig returns the BatchConfig field if non-nil, zero value otherwise.

### GetBatchConfigOk

`func (o *DatabricksLakehouseSettingsConfig) GetBatchConfigOk() (*BatchConfigBatchConfig, bool)`

GetBatchConfigOk returns a tuple with the BatchConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchConfig

`func (o *DatabricksLakehouseSettingsConfig) SetBatchConfig(v BatchConfigBatchConfig)`

SetBatchConfig sets BatchConfig field to given value.


### GetCatalog

`func (o *DatabricksLakehouseSettingsConfig) GetCatalog() string`

GetCatalog returns the Catalog field if non-nil, zero value otherwise.

### GetCatalogOk

`func (o *DatabricksLakehouseSettingsConfig) GetCatalogOk() (*string, bool)`

GetCatalogOk returns a tuple with the Catalog field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCatalog

`func (o *DatabricksLakehouseSettingsConfig) SetCatalog(v string)`

SetCatalog sets Catalog field to given value.


### GetClientId

`func (o *DatabricksLakehouseSettingsConfig) GetClientId() ModelsSecret`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *DatabricksLakehouseSettingsConfig) GetClientIdOk() (*ModelsSecret, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *DatabricksLakehouseSettingsConfig) SetClientId(v ModelsSecret)`

SetClientId sets ClientId field to given value.


### GetClientSecret

`func (o *DatabricksLakehouseSettingsConfig) GetClientSecret() ModelsSecret`

GetClientSecret returns the ClientSecret field if non-nil, zero value otherwise.

### GetClientSecretOk

`func (o *DatabricksLakehouseSettingsConfig) GetClientSecretOk() (*ModelsSecret, bool)`

GetClientSecretOk returns a tuple with the ClientSecret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientSecret

`func (o *DatabricksLakehouseSettingsConfig) SetClientSecret(v ModelsSecret)`

SetClientSecret sets ClientSecret field to given value.


### GetSchema

`func (o *DatabricksLakehouseSettingsConfig) GetSchema() string`

GetSchema returns the Schema field if non-nil, zero value otherwise.

### GetSchemaOk

`func (o *DatabricksLakehouseSettingsConfig) GetSchemaOk() (*string, bool)`

GetSchemaOk returns a tuple with the Schema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchema

`func (o *DatabricksLakehouseSettingsConfig) SetSchema(v string)`

SetSchema sets Schema field to given value.


### GetServerHostname

`func (o *DatabricksLakehouseSettingsConfig) GetServerHostname() string`

GetServerHostname returns the ServerHostname field if non-nil, zero value otherwise.

### GetServerHostnameOk

`func (o *DatabricksLakehouseSettingsConfig) GetServerHostnameOk() (*string, bool)`

GetServerHostnameOk returns a tuple with the ServerHostname field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServerHostname

`func (o *DatabricksLakehouseSettingsConfig) SetServerHostname(v string)`

SetServerHostname sets ServerHostname field to given value.


### GetWriteMode

`func (o *DatabricksLakehouseSettingsConfig) GetWriteMode() DatabricksLakehouseWriteMode`

GetWriteMode returns the WriteMode field if non-nil, zero value otherwise.

### GetWriteModeOk

`func (o *DatabricksLakehouseSettingsConfig) GetWriteModeOk() (*DatabricksLakehouseWriteMode, bool)`

GetWriteModeOk returns a tuple with the WriteMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWriteMode

`func (o *DatabricksLakehouseSettingsConfig) SetWriteMode(v DatabricksLakehouseWriteMode)`

SetWriteMode sets WriteMode field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


