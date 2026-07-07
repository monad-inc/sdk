# DatabricksLakehouseWriteMode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Autoloader** | Pointer to [**DatabricksLakehouseAutoLoaderWriteMode**](DatabricksLakehouseAutoLoaderWriteMode.md) |  | [optional] 
**WriteMode** | **string** |  | 
**Zerobus** | Pointer to [**DatabricksLakehouseZeroBusWriteMode**](DatabricksLakehouseZeroBusWriteMode.md) |  | [optional] 

## Methods

### NewDatabricksLakehouseWriteMode

`func NewDatabricksLakehouseWriteMode(writeMode string, ) *DatabricksLakehouseWriteMode`

NewDatabricksLakehouseWriteMode instantiates a new DatabricksLakehouseWriteMode object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDatabricksLakehouseWriteModeWithDefaults

`func NewDatabricksLakehouseWriteModeWithDefaults() *DatabricksLakehouseWriteMode`

NewDatabricksLakehouseWriteModeWithDefaults instantiates a new DatabricksLakehouseWriteMode object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAutoloader

`func (o *DatabricksLakehouseWriteMode) GetAutoloader() DatabricksLakehouseAutoLoaderWriteMode`

GetAutoloader returns the Autoloader field if non-nil, zero value otherwise.

### GetAutoloaderOk

`func (o *DatabricksLakehouseWriteMode) GetAutoloaderOk() (*DatabricksLakehouseAutoLoaderWriteMode, bool)`

GetAutoloaderOk returns a tuple with the Autoloader field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoloader

`func (o *DatabricksLakehouseWriteMode) SetAutoloader(v DatabricksLakehouseAutoLoaderWriteMode)`

SetAutoloader sets Autoloader field to given value.

### HasAutoloader

`func (o *DatabricksLakehouseWriteMode) HasAutoloader() bool`

HasAutoloader returns a boolean if a field has been set.

### GetWriteMode

`func (o *DatabricksLakehouseWriteMode) GetWriteMode() string`

GetWriteMode returns the WriteMode field if non-nil, zero value otherwise.

### GetWriteModeOk

`func (o *DatabricksLakehouseWriteMode) GetWriteModeOk() (*string, bool)`

GetWriteModeOk returns a tuple with the WriteMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWriteMode

`func (o *DatabricksLakehouseWriteMode) SetWriteMode(v string)`

SetWriteMode sets WriteMode field to given value.


### GetZerobus

`func (o *DatabricksLakehouseWriteMode) GetZerobus() DatabricksLakehouseZeroBusWriteMode`

GetZerobus returns the Zerobus field if non-nil, zero value otherwise.

### GetZerobusOk

`func (o *DatabricksLakehouseWriteMode) GetZerobusOk() (*DatabricksLakehouseZeroBusWriteMode, bool)`

GetZerobusOk returns a tuple with the Zerobus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetZerobus

`func (o *DatabricksLakehouseWriteMode) SetZerobus(v DatabricksLakehouseZeroBusWriteMode)`

SetZerobus sets Zerobus field to given value.

### HasZerobus

`func (o *DatabricksLakehouseWriteMode) HasZerobus() bool`

HasZerobus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


