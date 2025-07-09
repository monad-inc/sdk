# IamAccessAnalyzerFilter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criterion** | Pointer to [**IamAccessAnalyzerCriterion**](IamAccessAnalyzerCriterion.md) |  | [optional] 
**FilterKey** | Pointer to **string** |  | [optional] 

## Methods

### NewIamAccessAnalyzerFilter

`func NewIamAccessAnalyzerFilter() *IamAccessAnalyzerFilter`

NewIamAccessAnalyzerFilter instantiates a new IamAccessAnalyzerFilter object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIamAccessAnalyzerFilterWithDefaults

`func NewIamAccessAnalyzerFilterWithDefaults() *IamAccessAnalyzerFilter`

NewIamAccessAnalyzerFilterWithDefaults instantiates a new IamAccessAnalyzerFilter object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriterion

`func (o *IamAccessAnalyzerFilter) GetCriterion() IamAccessAnalyzerCriterion`

GetCriterion returns the Criterion field if non-nil, zero value otherwise.

### GetCriterionOk

`func (o *IamAccessAnalyzerFilter) GetCriterionOk() (*IamAccessAnalyzerCriterion, bool)`

GetCriterionOk returns a tuple with the Criterion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriterion

`func (o *IamAccessAnalyzerFilter) SetCriterion(v IamAccessAnalyzerCriterion)`

SetCriterion sets Criterion field to given value.

### HasCriterion

`func (o *IamAccessAnalyzerFilter) HasCriterion() bool`

HasCriterion returns a boolean if a field has been set.

### GetFilterKey

`func (o *IamAccessAnalyzerFilter) GetFilterKey() string`

GetFilterKey returns the FilterKey field if non-nil, zero value otherwise.

### GetFilterKeyOk

`func (o *IamAccessAnalyzerFilter) GetFilterKeyOk() (*string, bool)`

GetFilterKeyOk returns a tuple with the FilterKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilterKey

`func (o *IamAccessAnalyzerFilter) SetFilterKey(v string)`

SetFilterKey sets FilterKey field to given value.

### HasFilterKey

`func (o *IamAccessAnalyzerFilter) HasFilterKey() bool`

HasFilterKey returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


