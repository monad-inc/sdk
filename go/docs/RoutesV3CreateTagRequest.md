# RoutesV3CreateTagRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Color** | Pointer to **string** | Color is an optional hex color (e.g. \&quot;#1a2b3c\&quot;). | [optional] 
**Description** | Pointer to **string** | Description is an optional free-text description. | [optional] 
**Name** | Pointer to **string** | Name of the tag: lowercase letters, numbers, hyphens, underscores; &lt;&#x3D;128 chars. | [optional] 

## Methods

### NewRoutesV3CreateTagRequest

`func NewRoutesV3CreateTagRequest() *RoutesV3CreateTagRequest`

NewRoutesV3CreateTagRequest instantiates a new RoutesV3CreateTagRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV3CreateTagRequestWithDefaults

`func NewRoutesV3CreateTagRequestWithDefaults() *RoutesV3CreateTagRequest`

NewRoutesV3CreateTagRequestWithDefaults instantiates a new RoutesV3CreateTagRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetColor

`func (o *RoutesV3CreateTagRequest) GetColor() string`

GetColor returns the Color field if non-nil, zero value otherwise.

### GetColorOk

`func (o *RoutesV3CreateTagRequest) GetColorOk() (*string, bool)`

GetColorOk returns a tuple with the Color field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColor

`func (o *RoutesV3CreateTagRequest) SetColor(v string)`

SetColor sets Color field to given value.

### HasColor

`func (o *RoutesV3CreateTagRequest) HasColor() bool`

HasColor returns a boolean if a field has been set.

### GetDescription

`func (o *RoutesV3CreateTagRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoutesV3CreateTagRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoutesV3CreateTagRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoutesV3CreateTagRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *RoutesV3CreateTagRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoutesV3CreateTagRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoutesV3CreateTagRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoutesV3CreateTagRequest) HasName() bool`

HasName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


