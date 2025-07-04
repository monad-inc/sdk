/*
Monad API

This is the monad API

API version: 1.0
Contact: support@swagger.io
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package monad

import (
	"encoding/json"
)

// checks if the RoutesV2SuccessResponse type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoutesV2SuccessResponse{}

// RoutesV2SuccessResponse struct for RoutesV2SuccessResponse
type RoutesV2SuccessResponse struct {
	Message *string `json:"message,omitempty"`
}

// NewRoutesV2SuccessResponse instantiates a new RoutesV2SuccessResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoutesV2SuccessResponse() *RoutesV2SuccessResponse {
	this := RoutesV2SuccessResponse{}
	return &this
}

// NewRoutesV2SuccessResponseWithDefaults instantiates a new RoutesV2SuccessResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoutesV2SuccessResponseWithDefaults() *RoutesV2SuccessResponse {
	this := RoutesV2SuccessResponse{}
	return &this
}

// GetMessage returns the Message field value if set, zero value otherwise.
func (o *RoutesV2SuccessResponse) GetMessage() string {
	if o == nil || IsNil(o.Message) {
		var ret string
		return ret
	}
	return *o.Message
}

// GetMessageOk returns a tuple with the Message field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutesV2SuccessResponse) GetMessageOk() (*string, bool) {
	if o == nil || IsNil(o.Message) {
		return nil, false
	}
	return o.Message, true
}

// HasMessage returns a boolean if a field has been set.
func (o *RoutesV2SuccessResponse) HasMessage() bool {
	if o != nil && !IsNil(o.Message) {
		return true
	}

	return false
}

// SetMessage gets a reference to the given string and assigns it to the Message field.
func (o *RoutesV2SuccessResponse) SetMessage(v string) {
	o.Message = &v
}

func (o RoutesV2SuccessResponse) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoutesV2SuccessResponse) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Message) {
		toSerialize["message"] = o.Message
	}
	return toSerialize, nil
}

type NullableRoutesV2SuccessResponse struct {
	value *RoutesV2SuccessResponse
	isSet bool
}

func (v NullableRoutesV2SuccessResponse) Get() *RoutesV2SuccessResponse {
	return v.value
}

func (v *NullableRoutesV2SuccessResponse) Set(val *RoutesV2SuccessResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableRoutesV2SuccessResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableRoutesV2SuccessResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoutesV2SuccessResponse(val *RoutesV2SuccessResponse) *NullableRoutesV2SuccessResponse {
	return &NullableRoutesV2SuccessResponse{value: val, isSet: true}
}

func (v NullableRoutesV2SuccessResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoutesV2SuccessResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


