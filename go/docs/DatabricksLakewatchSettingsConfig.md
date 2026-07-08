# DatabricksLakewatchSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchConfig** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | 
**Catalog** | **string** | The Unity Catalog name | 
**ClientId** | [**ModelsSecret**](ModelsSecret.md) |  | 
**ClientSecret** | [**ModelsSecret**](ModelsSecret.md) |  | 
**Schema** | **string** | The target schema within the catalog | 
**ServerHostname** | **string** | The Databricks workspace hostname (e.g. adb-1234567890.azuredatabricks.net) | 
**WriteMode** | [**DatabricksLakewatchWriteMode**](DatabricksLakewatchWriteMode.md) |  | 

## Methods

### NewDatabricksLakewatchSettingsConfig

`func NewDatabricksLakewatchSettingsConfig(batchConfig BatchConfigBatchConfig, catalog string, clientId ModelsSecret, clientSecret ModelsSecret, schema string, serverHostname string, writeMode DatabricksLakewatchWriteMode, ) *DatabricksLakewatchSettingsConfig`

NewDatabricksLakewatchSettingsConfig instantiates a new DatabricksLakewatchSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDatabricksLakewatchSettingsConfigWithDefaults

`func NewDatabricksLakewatchSettingsConfigWithDefaults() *DatabricksLakewatchSettingsConfig`

NewDatabricksLakewatchSettingsConfigWithDefaults instantiates a new DatabricksLakewatchSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBatchConfig

`func (o *DatabricksLakewatchSettingsConfig) GetBatchConfig() BatchConfigBatchConfig`

GetBatchConfig returns the BatchConfig field if non-nil, zero value otherwise.

### GetBatchConfigOk

`func (o *DatabricksLakewatchSettingsConfig) GetBatchConfigOk() (*BatchConfigBatchConfig, bool)`

GetBatchConfigOk returns a tuple with the BatchConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchConfig

`func (o *DatabricksLakewatchSettingsConfig) SetBatchConfig(v BatchConfigBatchConfig)`

SetBatchConfig sets BatchConfig field to given value.


### GetCatalog

`func (o *DatabricksLakewatchSettingsConfig) GetCatalog() string`

GetCatalog returns the Catalog field if non-nil, zero value otherwise.

### GetCatalogOk

`func (o *DatabricksLakewatchSettingsConfig) GetCatalogOk() (*string, bool)`

GetCatalogOk returns a tuple with the Catalog field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCatalog

`func (o *DatabricksLakewatchSettingsConfig) SetCatalog(v string)`

SetCatalog sets Catalog field to given value.


### GetClientId

`func (o *DatabricksLakewatchSettingsConfig) GetClientId() ModelsSecret`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *DatabricksLakewatchSettingsConfig) GetClientIdOk() (*ModelsSecret, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *DatabricksLakewatchSettingsConfig) SetClientId(v ModelsSecret)`

SetClientId sets ClientId field to given value.


### GetClientSecret

`func (o *DatabricksLakewatchSettingsConfig) GetClientSecret() ModelsSecret`

GetClientSecret returns the ClientSecret field if non-nil, zero value otherwise.

### GetClientSecretOk

`func (o *DatabricksLakewatchSettingsConfig) GetClientSecretOk() (*ModelsSecret, bool)`

GetClientSecretOk returns a tuple with the ClientSecret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientSecret

`func (o *DatabricksLakewatchSettingsConfig) SetClientSecret(v ModelsSecret)`

SetClientSecret sets ClientSecret field to given value.


### GetSchema

`func (o *DatabricksLakewatchSettingsConfig) GetSchema() string`

GetSchema returns the Schema field if non-nil, zero value otherwise.

### GetSchemaOk

`func (o *DatabricksLakewatchSettingsConfig) GetSchemaOk() (*string, bool)`

GetSchemaOk returns a tuple with the Schema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchema

`func (o *DatabricksLakewatchSettingsConfig) SetSchema(v string)`

SetSchema sets Schema field to given value.


### GetServerHostname

`func (o *DatabricksLakewatchSettingsConfig) GetServerHostname() string`

GetServerHostname returns the ServerHostname field if non-nil, zero value otherwise.

### GetServerHostnameOk

`func (o *DatabricksLakewatchSettingsConfig) GetServerHostnameOk() (*string, bool)`

GetServerHostnameOk returns a tuple with the ServerHostname field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServerHostname

`func (o *DatabricksLakewatchSettingsConfig) SetServerHostname(v string)`

SetServerHostname sets ServerHostname field to given value.


### GetWriteMode

`func (o *DatabricksLakewatchSettingsConfig) GetWriteMode() DatabricksLakewatchWriteMode`

GetWriteMode returns the WriteMode field if non-nil, zero value otherwise.

### GetWriteModeOk

`func (o *DatabricksLakewatchSettingsConfig) GetWriteModeOk() (*DatabricksLakewatchWriteMode, bool)`

GetWriteModeOk returns a tuple with the WriteMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWriteMode

`func (o *DatabricksLakewatchSettingsConfig) SetWriteMode(v DatabricksLakewatchWriteMode)`

SetWriteMode sets WriteMode field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


