# TypesStringFilter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comparison** | Pointer to [**TypesStringComparison**](TypesStringComparison.md) |  | [optional] 
**Value** | Pointer to **string** | The value to filter on.  This member is required. | [optional] 

## Methods

### NewTypesStringFilter

`func NewTypesStringFilter() *TypesStringFilter`

NewTypesStringFilter instantiates a new TypesStringFilter object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTypesStringFilterWithDefaults

`func NewTypesStringFilterWithDefaults() *TypesStringFilter`

NewTypesStringFilterWithDefaults instantiates a new TypesStringFilter object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComparison

`func (o *TypesStringFilter) GetComparison() TypesStringComparison`

GetComparison returns the Comparison field if non-nil, zero value otherwise.

### GetComparisonOk

`func (o *TypesStringFilter) GetComparisonOk() (*TypesStringComparison, bool)`

GetComparisonOk returns a tuple with the Comparison field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComparison

`func (o *TypesStringFilter) SetComparison(v TypesStringComparison)`

SetComparison sets Comparison field to given value.

### HasComparison

`func (o *TypesStringFilter) HasComparison() bool`

HasComparison returns a boolean if a field has been set.

### GetValue

`func (o *TypesStringFilter) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *TypesStringFilter) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *TypesStringFilter) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *TypesStringFilter) HasValue() bool`

HasValue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


