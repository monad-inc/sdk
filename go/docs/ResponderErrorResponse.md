# ResponderErrorResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdditionalDetails** | Pointer to **interface{}** |  | [optional] 
**Code** | Pointer to **int32** |  | [optional] 
**Error** | Pointer to **string** |  | [optional] 

## Methods

### NewResponderErrorResponse

`func NewResponderErrorResponse() *ResponderErrorResponse`

NewResponderErrorResponse instantiates a new ResponderErrorResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResponderErrorResponseWithDefaults

`func NewResponderErrorResponseWithDefaults() *ResponderErrorResponse`

NewResponderErrorResponseWithDefaults instantiates a new ResponderErrorResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdditionalDetails

`func (o *ResponderErrorResponse) GetAdditionalDetails() interface{}`

GetAdditionalDetails returns the AdditionalDetails field if non-nil, zero value otherwise.

### GetAdditionalDetailsOk

`func (o *ResponderErrorResponse) GetAdditionalDetailsOk() (*interface{}, bool)`

GetAdditionalDetailsOk returns a tuple with the AdditionalDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalDetails

`func (o *ResponderErrorResponse) SetAdditionalDetails(v interface{})`

SetAdditionalDetails sets AdditionalDetails field to given value.

### HasAdditionalDetails

`func (o *ResponderErrorResponse) HasAdditionalDetails() bool`

HasAdditionalDetails returns a boolean if a field has been set.

### SetAdditionalDetailsNil

`func (o *ResponderErrorResponse) SetAdditionalDetailsNil(b bool)`

 SetAdditionalDetailsNil sets the value for AdditionalDetails to be an explicit nil

### UnsetAdditionalDetails
`func (o *ResponderErrorResponse) UnsetAdditionalDetails()`

UnsetAdditionalDetails ensures that no value is present for AdditionalDetails, not even an explicit nil
### GetCode

`func (o *ResponderErrorResponse) GetCode() int32`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ResponderErrorResponse) GetCodeOk() (*int32, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ResponderErrorResponse) SetCode(v int32)`

SetCode sets Code field to given value.

### HasCode

`func (o *ResponderErrorResponse) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetError

`func (o *ResponderErrorResponse) GetError() string`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *ResponderErrorResponse) GetErrorOk() (*string, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *ResponderErrorResponse) SetError(v string)`

SetError sets Error field to given value.

### HasError

`func (o *ResponderErrorResponse) HasError() bool`

HasError returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


