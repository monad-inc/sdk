# BigqueryInputSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Dataset** | Pointer to **string** | The BigQuery dataset ID containing the table | [optional] 
**Project** | Pointer to **string** | The GCP project ID containing the BigQuery dataset | [optional] 
**Query** | Pointer to **string** | Optional custom query to use instead of table (must include timestamp_column) | [optional] 
**Table** | Pointer to **string** | The BigQuery table ID to query data from | [optional] 
**TimestampColumn** | Pointer to **string** | The column containing timestamp values used for incremental loading | [optional] 

## Methods

### NewBigqueryInputSettingsConfig

`func NewBigqueryInputSettingsConfig() *BigqueryInputSettingsConfig`

NewBigqueryInputSettingsConfig instantiates a new BigqueryInputSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBigqueryInputSettingsConfigWithDefaults

`func NewBigqueryInputSettingsConfigWithDefaults() *BigqueryInputSettingsConfig`

NewBigqueryInputSettingsConfigWithDefaults instantiates a new BigqueryInputSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDataset

`func (o *BigqueryInputSettingsConfig) GetDataset() string`

GetDataset returns the Dataset field if non-nil, zero value otherwise.

### GetDatasetOk

`func (o *BigqueryInputSettingsConfig) GetDatasetOk() (*string, bool)`

GetDatasetOk returns a tuple with the Dataset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataset

`func (o *BigqueryInputSettingsConfig) SetDataset(v string)`

SetDataset sets Dataset field to given value.

### HasDataset

`func (o *BigqueryInputSettingsConfig) HasDataset() bool`

HasDataset returns a boolean if a field has been set.

### GetProject

`func (o *BigqueryInputSettingsConfig) GetProject() string`

GetProject returns the Project field if non-nil, zero value otherwise.

### GetProjectOk

`func (o *BigqueryInputSettingsConfig) GetProjectOk() (*string, bool)`

GetProjectOk returns a tuple with the Project field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProject

`func (o *BigqueryInputSettingsConfig) SetProject(v string)`

SetProject sets Project field to given value.

### HasProject

`func (o *BigqueryInputSettingsConfig) HasProject() bool`

HasProject returns a boolean if a field has been set.

### GetQuery

`func (o *BigqueryInputSettingsConfig) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *BigqueryInputSettingsConfig) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *BigqueryInputSettingsConfig) SetQuery(v string)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *BigqueryInputSettingsConfig) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### GetTable

`func (o *BigqueryInputSettingsConfig) GetTable() string`

GetTable returns the Table field if non-nil, zero value otherwise.

### GetTableOk

`func (o *BigqueryInputSettingsConfig) GetTableOk() (*string, bool)`

GetTableOk returns a tuple with the Table field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTable

`func (o *BigqueryInputSettingsConfig) SetTable(v string)`

SetTable sets Table field to given value.

### HasTable

`func (o *BigqueryInputSettingsConfig) HasTable() bool`

HasTable returns a boolean if a field has been set.

### GetTimestampColumn

`func (o *BigqueryInputSettingsConfig) GetTimestampColumn() string`

GetTimestampColumn returns the TimestampColumn field if non-nil, zero value otherwise.

### GetTimestampColumnOk

`func (o *BigqueryInputSettingsConfig) GetTimestampColumnOk() (*string, bool)`

GetTimestampColumnOk returns a tuple with the TimestampColumn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestampColumn

`func (o *BigqueryInputSettingsConfig) SetTimestampColumn(v string)`

SetTimestampColumn sets TimestampColumn field to given value.

### HasTimestampColumn

`func (o *BigqueryInputSettingsConfig) HasTimestampColumn() bool`

HasTimestampColumn returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


