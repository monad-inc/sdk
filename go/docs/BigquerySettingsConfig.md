# BigquerySettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Dataset** | Pointer to **string** | The name of the BigQuery dataset where the table resides | [optional] 
**ProjectId** | Pointer to **string** | The Google Cloud Project ID where the BigQuery instance is located | [optional] 
**Table** | Pointer to **string** | The name of the table where the data will be written | [optional] 

## Methods

### NewBigquerySettingsConfig

`func NewBigquerySettingsConfig() *BigquerySettingsConfig`

NewBigquerySettingsConfig instantiates a new BigquerySettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBigquerySettingsConfigWithDefaults

`func NewBigquerySettingsConfigWithDefaults() *BigquerySettingsConfig`

NewBigquerySettingsConfigWithDefaults instantiates a new BigquerySettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDataset

`func (o *BigquerySettingsConfig) GetDataset() string`

GetDataset returns the Dataset field if non-nil, zero value otherwise.

### GetDatasetOk

`func (o *BigquerySettingsConfig) GetDatasetOk() (*string, bool)`

GetDatasetOk returns a tuple with the Dataset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataset

`func (o *BigquerySettingsConfig) SetDataset(v string)`

SetDataset sets Dataset field to given value.

### HasDataset

`func (o *BigquerySettingsConfig) HasDataset() bool`

HasDataset returns a boolean if a field has been set.

### GetProjectId

`func (o *BigquerySettingsConfig) GetProjectId() string`

GetProjectId returns the ProjectId field if non-nil, zero value otherwise.

### GetProjectIdOk

`func (o *BigquerySettingsConfig) GetProjectIdOk() (*string, bool)`

GetProjectIdOk returns a tuple with the ProjectId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProjectId

`func (o *BigquerySettingsConfig) SetProjectId(v string)`

SetProjectId sets ProjectId field to given value.

### HasProjectId

`func (o *BigquerySettingsConfig) HasProjectId() bool`

HasProjectId returns a boolean if a field has been set.

### GetTable

`func (o *BigquerySettingsConfig) GetTable() string`

GetTable returns the Table field if non-nil, zero value otherwise.

### GetTableOk

`func (o *BigquerySettingsConfig) GetTableOk() (*string, bool)`

GetTableOk returns a tuple with the Table field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTable

`func (o *BigquerySettingsConfig) SetTable(v string)`

SetTable sets Table field to given value.

### HasTable

`func (o *BigquerySettingsConfig) HasTable() bool`

HasTable returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


