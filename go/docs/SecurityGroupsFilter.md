# SecurityGroupsFilter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Values** | Pointer to **[]string** |  | [optional] 

## Methods

### NewSecurityGroupsFilter

`func NewSecurityGroupsFilter() *SecurityGroupsFilter`

NewSecurityGroupsFilter instantiates a new SecurityGroupsFilter object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSecurityGroupsFilterWithDefaults

`func NewSecurityGroupsFilterWithDefaults() *SecurityGroupsFilter`

NewSecurityGroupsFilterWithDefaults instantiates a new SecurityGroupsFilter object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *SecurityGroupsFilter) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SecurityGroupsFilter) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SecurityGroupsFilter) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SecurityGroupsFilter) HasName() bool`

HasName returns a boolean if a field has been set.

### GetValues

`func (o *SecurityGroupsFilter) GetValues() []string`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *SecurityGroupsFilter) GetValuesOk() (*[]string, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *SecurityGroupsFilter) SetValues(v []string)`

SetValues sets Values field to given value.

### HasValues

`func (o *SecurityGroupsFilter) HasValues() bool`

HasValues returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


