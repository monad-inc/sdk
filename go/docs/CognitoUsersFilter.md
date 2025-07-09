# CognitoUsersFilter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | Pointer to **string** |  | [optional] 
**Operator** | Pointer to **string** |  | [optional] 
**Value** | Pointer to **string** |  | [optional] 

## Methods

### NewCognitoUsersFilter

`func NewCognitoUsersFilter() *CognitoUsersFilter`

NewCognitoUsersFilter instantiates a new CognitoUsersFilter object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCognitoUsersFilterWithDefaults

`func NewCognitoUsersFilterWithDefaults() *CognitoUsersFilter`

NewCognitoUsersFilterWithDefaults instantiates a new CognitoUsersFilter object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttribute

`func (o *CognitoUsersFilter) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *CognitoUsersFilter) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *CognitoUsersFilter) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *CognitoUsersFilter) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### GetOperator

`func (o *CognitoUsersFilter) GetOperator() string`

GetOperator returns the Operator field if non-nil, zero value otherwise.

### GetOperatorOk

`func (o *CognitoUsersFilter) GetOperatorOk() (*string, bool)`

GetOperatorOk returns a tuple with the Operator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperator

`func (o *CognitoUsersFilter) SetOperator(v string)`

SetOperator sets Operator field to given value.

### HasOperator

`func (o *CognitoUsersFilter) HasOperator() bool`

HasOperator returns a boolean if a field has been set.

### GetValue

`func (o *CognitoUsersFilter) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *CognitoUsersFilter) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *CognitoUsersFilter) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *CognitoUsersFilter) HasValue() bool`

HasValue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


