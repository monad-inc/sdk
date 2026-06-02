# DatabricksLakewatchWriteMode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutoLoader** | Pointer to [**DatabricksLakewatchAutoLoaderWriteMode**](DatabricksLakewatchAutoLoaderWriteMode.md) |  | [optional] 
**WriteMode** | **string** |  | 
**Zerobus** | Pointer to [**DatabricksLakewatchZeroBusWriteMode**](DatabricksLakewatchZeroBusWriteMode.md) |  | [optional] 

## Methods

### NewDatabricksLakewatchWriteMode

`func NewDatabricksLakewatchWriteMode(writeMode string, ) *DatabricksLakewatchWriteMode`

NewDatabricksLakewatchWriteMode instantiates a new DatabricksLakewatchWriteMode object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDatabricksLakewatchWriteModeWithDefaults

`func NewDatabricksLakewatchWriteModeWithDefaults() *DatabricksLakewatchWriteMode`

NewDatabricksLakewatchWriteModeWithDefaults instantiates a new DatabricksLakewatchWriteMode object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAutoLoader

`func (o *DatabricksLakewatchWriteMode) GetAutoLoader() DatabricksLakewatchAutoLoaderWriteMode`

GetAutoLoader returns the AutoLoader field if non-nil, zero value otherwise.

### GetAutoLoaderOk

`func (o *DatabricksLakewatchWriteMode) GetAutoLoaderOk() (*DatabricksLakewatchAutoLoaderWriteMode, bool)`

GetAutoLoaderOk returns a tuple with the AutoLoader field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoLoader

`func (o *DatabricksLakewatchWriteMode) SetAutoLoader(v DatabricksLakewatchAutoLoaderWriteMode)`

SetAutoLoader sets AutoLoader field to given value.

### HasAutoLoader

`func (o *DatabricksLakewatchWriteMode) HasAutoLoader() bool`

HasAutoLoader returns a boolean if a field has been set.

### GetWriteMode

`func (o *DatabricksLakewatchWriteMode) GetWriteMode() string`

GetWriteMode returns the WriteMode field if non-nil, zero value otherwise.

### GetWriteModeOk

`func (o *DatabricksLakewatchWriteMode) GetWriteModeOk() (*string, bool)`

GetWriteModeOk returns a tuple with the WriteMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWriteMode

`func (o *DatabricksLakewatchWriteMode) SetWriteMode(v string)`

SetWriteMode sets WriteMode field to given value.


### GetZerobus

`func (o *DatabricksLakewatchWriteMode) GetZerobus() DatabricksLakewatchZeroBusWriteMode`

GetZerobus returns the Zerobus field if non-nil, zero value otherwise.

### GetZerobusOk

`func (o *DatabricksLakewatchWriteMode) GetZerobusOk() (*DatabricksLakewatchZeroBusWriteMode, bool)`

GetZerobusOk returns a tuple with the Zerobus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetZerobus

`func (o *DatabricksLakewatchWriteMode) SetZerobus(v DatabricksLakewatchZeroBusWriteMode)`

SetZerobus sets Zerobus field to given value.

### HasZerobus

`func (o *DatabricksLakewatchWriteMode) HasZerobus() bool`

HasZerobus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


