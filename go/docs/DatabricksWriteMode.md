# DatabricksWriteMode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutoLoader** | Pointer to **map[string]interface{}** |  | [optional] 
**CopyInto** | Pointer to [**DatabricksCopyIntoWriteMode**](DatabricksCopyIntoWriteMode.md) |  | [optional] 
**WriteMode** | **string** |  | 

## Methods

### NewDatabricksWriteMode

`func NewDatabricksWriteMode(writeMode string, ) *DatabricksWriteMode`

NewDatabricksWriteMode instantiates a new DatabricksWriteMode object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDatabricksWriteModeWithDefaults

`func NewDatabricksWriteModeWithDefaults() *DatabricksWriteMode`

NewDatabricksWriteModeWithDefaults instantiates a new DatabricksWriteMode object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAutoLoader

`func (o *DatabricksWriteMode) GetAutoLoader() map[string]interface{}`

GetAutoLoader returns the AutoLoader field if non-nil, zero value otherwise.

### GetAutoLoaderOk

`func (o *DatabricksWriteMode) GetAutoLoaderOk() (*map[string]interface{}, bool)`

GetAutoLoaderOk returns a tuple with the AutoLoader field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoLoader

`func (o *DatabricksWriteMode) SetAutoLoader(v map[string]interface{})`

SetAutoLoader sets AutoLoader field to given value.

### HasAutoLoader

`func (o *DatabricksWriteMode) HasAutoLoader() bool`

HasAutoLoader returns a boolean if a field has been set.

### GetCopyInto

`func (o *DatabricksWriteMode) GetCopyInto() DatabricksCopyIntoWriteMode`

GetCopyInto returns the CopyInto field if non-nil, zero value otherwise.

### GetCopyIntoOk

`func (o *DatabricksWriteMode) GetCopyIntoOk() (*DatabricksCopyIntoWriteMode, bool)`

GetCopyIntoOk returns a tuple with the CopyInto field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyInto

`func (o *DatabricksWriteMode) SetCopyInto(v DatabricksCopyIntoWriteMode)`

SetCopyInto sets CopyInto field to given value.

### HasCopyInto

`func (o *DatabricksWriteMode) HasCopyInto() bool`

HasCopyInto returns a boolean if a field has been set.

### GetWriteMode

`func (o *DatabricksWriteMode) GetWriteMode() string`

GetWriteMode returns the WriteMode field if non-nil, zero value otherwise.

### GetWriteModeOk

`func (o *DatabricksWriteMode) GetWriteModeOk() (*string, bool)`

GetWriteModeOk returns a tuple with the WriteMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWriteMode

`func (o *DatabricksWriteMode) SetWriteMode(v string)`

SetWriteMode sets WriteMode field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


