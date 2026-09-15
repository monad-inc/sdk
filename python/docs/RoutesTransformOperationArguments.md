# RoutesTransformOperationArguments


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key to store the timestamp in | [optional] 
**value** | **object** |  | [optional] 
**type** | **str** | The new type of the key | [optional] 
**columns** | **Dict[str, str]** | Custom CEF-key -&gt; output-column map; entries override the preset. | [optional] 
**continuation_marker** | **str** | Collector continuation marker, e.g. \&quot;#LF#\&quot; or \&quot;#012\&quot;; \&quot;\&quot; disables continuation handling. | [optional] 
**continuation_mode** | **str** | \&quot;spill\&quot; (default), \&quot;keep\&quot;, or \&quot;newline\&quot;. | [optional] 
**dialect** | **str** | \&quot;cef\&quot; (spec-faithful, default) or \&quot;legacy_kv\&quot; (bug-compat with jq CEF parsers). | [optional] 
**empty_to_null** | **bool** | Write empty-string values as null. Default false. | [optional] 
**envelope** | **Dict[str, str]** | Output field -&gt; record path (JSONPath), copied verbatim; missing -&gt; null. | [optional] 
**header_fields** | **List[str]** | Exactly 7 output names for the header slots; default per preset. | [optional] 
**iso_date_columns** | **List[str]** | Output columns rewritten \&quot;YYYY/MM/DD HH:MM:SS\&quot; -&gt; \&quot;YYYY-MM-DDTHH:MM:SSZ\&quot;. | [optional] 
**numeric_columns** | **List[str]** | Output columns coerced to number (invalid -&gt; null); unset &#x3D; preset default, [] &#x3D; off. | [optional] 
**output_key** | **str** | Target key when output_mode is \&quot;under_key\&quot;. | [optional] 
**output_mode** | **str** | \&quot;replace\&quot; (default), \&quot;merge\&quot;, or \&quot;under_key\&quot;. | [optional] 
**overflow_field** | **str** | Unmapped keys joined into this field; \&quot;\&quot; emits unmapped keys as individual fields. | [optional] 
**overflow_separator** | **str** | Separator between overflow entries. Default \&quot;;\&quot;. | [optional] 
**preset** | **str** | \&quot;\&quot; (none), \&quot;cef_full_names\&quot;, or \&quot;common_security_log\&quot;. | [optional] 
**resolve_labels** | **bool** | Promote csN/csNLabel-style pairs into fields named by the label. Default false. | [optional] 
**strict** | **bool** | Fail the record on structural problems instead of best-effort parsing. Default false. | [optional] 
**strip_quotes** | **bool** | Remove one leading+trailing double-quote from values that carry both. Default false. | [optional] 
**warnings_key** | **str** | Write parse warnings as a string array under this key; \&quot;\&quot; (default) omits them. | [optional] 
**source_format** | [**ConvertTimestampTimestampFormat**](ConvertTimestampTimestampFormat.md) |  | [optional] 
**source_format_custom** | **str** | Optional: Custom Go time layout (only if SourceFormat &#x3D; \&quot;custom\&quot;) | [optional] 
**source_key** | **str** | Required: JSONPath to source timestamp field | [optional] 
**source_timezone** | **str** | Optional: Source timezone (default: UTC) | [optional] 
**target_format** | [**ConvertTimestampTimestampFormat**](ConvertTimestampTimestampFormat.md) |  | [optional] 
**target_format_custom** | **str** | Optional: Custom target format (only if TargetFormat &#x3D; \&quot;custom\&quot;) | [optional] 
**target_key** | **str** | Optional: Target field (if empty, overwrites SourceKey) | [optional] 
**target_timezone** | **str** | Optional: Target timezone (default: UTC) | [optional] 
**key_to_watch** | **str** | The key to watch for | [optional] 
**value_to_watch** | **object** |  | [optional] 
**fields** | **List[str]** | Fields to hash, in order; empty hashes the whole record | [optional] 
**window** | **str** | dedup window / key TTL: one of 1m..5m | [optional] 
**new_key** | **str** | The new key to rename to | [optional] 
**algorithm** | **str** | Hash algorithm | [optional] 
**delimiter** | **str** | The delimiter to use when flattening for example flattening an array of assets: _ would result in assets_0, assets_1 | [optional] 
**prevent_data_dropping** | **bool** | PreventDataDropping errors instead of dropping the record when the query produces no output. Only applies when Key is unset, since storing the result under a key always emits a record. | [optional] 
**query** | **str** | The raw query string from config | [optional] 
**mode** | [**MaskModeConfig**](MaskModeConfig.md) |  | [optional] 
**value_to_set** | **object** |  | [optional] 
**format** | [**UtcTimestampTimestampFormat**](UtcTimestampTimestampFormat.md) |  | [optional] 

## Example

```python
from monad.models.routes_transform_operation_arguments import RoutesTransformOperationArguments

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesTransformOperationArguments from a JSON string
routes_transform_operation_arguments_instance = RoutesTransformOperationArguments.from_json(json)
# print the JSON string representation of the object
print(RoutesTransformOperationArguments.to_json())

# convert the object into a dict
routes_transform_operation_arguments_dict = routes_transform_operation_arguments_instance.to_dict()
# create an instance of RoutesTransformOperationArguments from a dict
routes_transform_operation_arguments_from_dict = RoutesTransformOperationArguments.from_dict(routes_transform_operation_arguments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


