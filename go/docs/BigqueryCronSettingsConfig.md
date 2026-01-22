# BigqueryCronSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Cron** | Pointer to **string** | Cron string for scheduling the ingest of your input | [optional] 
**Dataset** | Pointer to **string** | The BigQuery dataset ID containing the table | [optional] 
**Project** | Pointer to **string** | The GCP project ID containing the BigQuery dataset | [optional] 
**Query** | Pointer to **string** | Optional custom query to use instead of table | [optional] 
**Table** | Pointer to **string** | The BigQuery table ID to query data from | [optional] 

## Methods

### NewBigqueryCronSettingsConfig

`func NewBigqueryCronSettingsConfig() *BigqueryCronSettingsConfig`

NewBigqueryCronSettingsConfig instantiates a new BigqueryCronSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBigqueryCronSettingsConfigWithDefaults

`func NewBigqueryCronSettingsConfigWithDefaults() *BigqueryCronSettingsConfig`

NewBigqueryCronSettingsConfigWithDefaults instantiates a new BigqueryCronSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCron

`func (o *BigqueryCronSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *BigqueryCronSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *BigqueryCronSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *BigqueryCronSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetDataset

`func (o *BigqueryCronSettingsConfig) GetDataset() string`

GetDataset returns the Dataset field if non-nil, zero value otherwise.

### GetDatasetOk

`func (o *BigqueryCronSettingsConfig) GetDatasetOk() (*string, bool)`

GetDatasetOk returns a tuple with the Dataset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataset

`func (o *BigqueryCronSettingsConfig) SetDataset(v string)`

SetDataset sets Dataset field to given value.

### HasDataset

`func (o *BigqueryCronSettingsConfig) HasDataset() bool`

HasDataset returns a boolean if a field has been set.

### GetProject

`func (o *BigqueryCronSettingsConfig) GetProject() string`

GetProject returns the Project field if non-nil, zero value otherwise.

### GetProjectOk

`func (o *BigqueryCronSettingsConfig) GetProjectOk() (*string, bool)`

GetProjectOk returns a tuple with the Project field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProject

`func (o *BigqueryCronSettingsConfig) SetProject(v string)`

SetProject sets Project field to given value.

### HasProject

`func (o *BigqueryCronSettingsConfig) HasProject() bool`

HasProject returns a boolean if a field has been set.

### GetQuery

`func (o *BigqueryCronSettingsConfig) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *BigqueryCronSettingsConfig) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *BigqueryCronSettingsConfig) SetQuery(v string)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *BigqueryCronSettingsConfig) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### GetTable

`func (o *BigqueryCronSettingsConfig) GetTable() string`

GetTable returns the Table field if non-nil, zero value otherwise.

### GetTableOk

`func (o *BigqueryCronSettingsConfig) GetTableOk() (*string, bool)`

GetTableOk returns a tuple with the Table field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTable

`func (o *BigqueryCronSettingsConfig) SetTable(v string)`

SetTable sets Table field to given value.

### HasTable

`func (o *BigqueryCronSettingsConfig) HasTable() bool`

HasTable returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


