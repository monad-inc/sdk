# DatabricksCopyIntoWriteMode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TableName** | **string** | The target Delta table name. Required for copy_into mode. If the table doesn&#39;t exist, Monad will create it. | 

## Methods

### NewDatabricksCopyIntoWriteMode

`func NewDatabricksCopyIntoWriteMode(tableName string, ) *DatabricksCopyIntoWriteMode`

NewDatabricksCopyIntoWriteMode instantiates a new DatabricksCopyIntoWriteMode object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDatabricksCopyIntoWriteModeWithDefaults

`func NewDatabricksCopyIntoWriteModeWithDefaults() *DatabricksCopyIntoWriteMode`

NewDatabricksCopyIntoWriteModeWithDefaults instantiates a new DatabricksCopyIntoWriteMode object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTableName

`func (o *DatabricksCopyIntoWriteMode) GetTableName() string`

GetTableName returns the TableName field if non-nil, zero value otherwise.

### GetTableNameOk

`func (o *DatabricksCopyIntoWriteMode) GetTableNameOk() (*string, bool)`

GetTableNameOk returns a tuple with the TableName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTableName

`func (o *DatabricksCopyIntoWriteMode) SetTableName(v string)`

SetTableName sets TableName field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


