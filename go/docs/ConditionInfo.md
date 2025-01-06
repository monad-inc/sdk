# ConditionInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConfigMeta** | Pointer to **interface{}** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**TypeID** | Pointer to **string** |  | [optional] 

## Methods

### NewConditionInfo

`func NewConditionInfo() *ConditionInfo`

NewConditionInfo instantiates a new ConditionInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConditionInfoWithDefaults

`func NewConditionInfoWithDefaults() *ConditionInfo`

NewConditionInfoWithDefaults instantiates a new ConditionInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfigMeta

`func (o *ConditionInfo) GetConfigMeta() interface{}`

GetConfigMeta returns the ConfigMeta field if non-nil, zero value otherwise.

### GetConfigMetaOk

`func (o *ConditionInfo) GetConfigMetaOk() (*interface{}, bool)`

GetConfigMetaOk returns a tuple with the ConfigMeta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfigMeta

`func (o *ConditionInfo) SetConfigMeta(v interface{})`

SetConfigMeta sets ConfigMeta field to given value.

### HasConfigMeta

`func (o *ConditionInfo) HasConfigMeta() bool`

HasConfigMeta returns a boolean if a field has been set.

### SetConfigMetaNil

`func (o *ConditionInfo) SetConfigMetaNil(b bool)`

 SetConfigMetaNil sets the value for ConfigMeta to be an explicit nil

### UnsetConfigMeta
`func (o *ConditionInfo) UnsetConfigMeta()`

UnsetConfigMeta ensures that no value is present for ConfigMeta, not even an explicit nil
### GetDescription

`func (o *ConditionInfo) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ConditionInfo) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ConditionInfo) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ConditionInfo) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *ConditionInfo) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ConditionInfo) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ConditionInfo) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ConditionInfo) HasName() bool`

HasName returns a boolean if a field has been set.

### GetTypeID

`func (o *ConditionInfo) GetTypeID() string`

GetTypeID returns the TypeID field if non-nil, zero value otherwise.

### GetTypeIDOk

`func (o *ConditionInfo) GetTypeIDOk() (*string, bool)`

GetTypeIDOk returns a tuple with the TypeID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTypeID

`func (o *ConditionInfo) SetTypeID(v string)`

SetTypeID sets TypeID field to given value.

### HasTypeID

`func (o *ConditionInfo) HasTypeID() bool`

HasTypeID returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


