# HttpHeaders

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HeaderKey** | Pointer to **string** |  | [optional] 
**HeaderValue** | Pointer to **string** |  | [optional] 

## Methods

### NewHttpHeaders

`func NewHttpHeaders() *HttpHeaders`

NewHttpHeaders instantiates a new HttpHeaders object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHttpHeadersWithDefaults

`func NewHttpHeadersWithDefaults() *HttpHeaders`

NewHttpHeadersWithDefaults instantiates a new HttpHeaders object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHeaderKey

`func (o *HttpHeaders) GetHeaderKey() string`

GetHeaderKey returns the HeaderKey field if non-nil, zero value otherwise.

### GetHeaderKeyOk

`func (o *HttpHeaders) GetHeaderKeyOk() (*string, bool)`

GetHeaderKeyOk returns a tuple with the HeaderKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeaderKey

`func (o *HttpHeaders) SetHeaderKey(v string)`

SetHeaderKey sets HeaderKey field to given value.

### HasHeaderKey

`func (o *HttpHeaders) HasHeaderKey() bool`

HasHeaderKey returns a boolean if a field has been set.

### GetHeaderValue

`func (o *HttpHeaders) GetHeaderValue() string`

GetHeaderValue returns the HeaderValue field if non-nil, zero value otherwise.

### GetHeaderValueOk

`func (o *HttpHeaders) GetHeaderValueOk() (*string, bool)`

GetHeaderValueOk returns a tuple with the HeaderValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeaderValue

`func (o *HttpHeaders) SetHeaderValue(v string)`

SetHeaderValue sets HeaderValue field to given value.

### HasHeaderValue

`func (o *HttpHeaders) HasHeaderValue() bool`

HasHeaderValue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


