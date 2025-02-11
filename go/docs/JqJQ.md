# JqJQ

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | Pointer to **string** | The key to store the JQ query result under. If this is not provided the output will be the result of the JQ query. | [optional] 
**Query** | Pointer to **string** | The JQ query to apply to the record | [optional] 

## Methods

### NewJqJQ

`func NewJqJQ() *JqJQ`

NewJqJQ instantiates a new JqJQ object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJqJQWithDefaults

`func NewJqJQWithDefaults() *JqJQ`

NewJqJQWithDefaults instantiates a new JqJQ object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *JqJQ) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *JqJQ) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *JqJQ) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *JqJQ) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetQuery

`func (o *JqJQ) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *JqJQ) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *JqJQ) SetQuery(v string)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *JqJQ) HasQuery() bool`

HasQuery returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


