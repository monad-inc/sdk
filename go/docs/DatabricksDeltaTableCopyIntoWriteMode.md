# DatabricksDeltaTableCopyIntoWriteMode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HttpPath** | **string** | The SQL warehouse HTTP path from connection details (e.g. /sql/1.0/warehouses/abc123). Required for copy_into mode; not needed for autoloader. | 
**TableName** | **string** | The target Delta table name. Required for copy_into mode. If the table doesn&#39;t exist, Monad will create it. | 
**Volume** | **string** | The Unity Catalog Volume used for staging JSONL files before COPY INTO. | 

## Methods

### NewDatabricksDeltaTableCopyIntoWriteMode

`func NewDatabricksDeltaTableCopyIntoWriteMode(httpPath string, tableName string, volume string, ) *DatabricksDeltaTableCopyIntoWriteMode`

NewDatabricksDeltaTableCopyIntoWriteMode instantiates a new DatabricksDeltaTableCopyIntoWriteMode object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDatabricksDeltaTableCopyIntoWriteModeWithDefaults

`func NewDatabricksDeltaTableCopyIntoWriteModeWithDefaults() *DatabricksDeltaTableCopyIntoWriteMode`

NewDatabricksDeltaTableCopyIntoWriteModeWithDefaults instantiates a new DatabricksDeltaTableCopyIntoWriteMode object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHttpPath

`func (o *DatabricksDeltaTableCopyIntoWriteMode) GetHttpPath() string`

GetHttpPath returns the HttpPath field if non-nil, zero value otherwise.

### GetHttpPathOk

`func (o *DatabricksDeltaTableCopyIntoWriteMode) GetHttpPathOk() (*string, bool)`

GetHttpPathOk returns a tuple with the HttpPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHttpPath

`func (o *DatabricksDeltaTableCopyIntoWriteMode) SetHttpPath(v string)`

SetHttpPath sets HttpPath field to given value.


### GetTableName

`func (o *DatabricksDeltaTableCopyIntoWriteMode) GetTableName() string`

GetTableName returns the TableName field if non-nil, zero value otherwise.

### GetTableNameOk

`func (o *DatabricksDeltaTableCopyIntoWriteMode) GetTableNameOk() (*string, bool)`

GetTableNameOk returns a tuple with the TableName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTableName

`func (o *DatabricksDeltaTableCopyIntoWriteMode) SetTableName(v string)`

SetTableName sets TableName field to given value.


### GetVolume

`func (o *DatabricksDeltaTableCopyIntoWriteMode) GetVolume() string`

GetVolume returns the Volume field if non-nil, zero value otherwise.

### GetVolumeOk

`func (o *DatabricksDeltaTableCopyIntoWriteMode) GetVolumeOk() (*string, bool)`

GetVolumeOk returns a tuple with the Volume field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVolume

`func (o *DatabricksDeltaTableCopyIntoWriteMode) SetVolume(v string)`

SetVolume sets Volume field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


