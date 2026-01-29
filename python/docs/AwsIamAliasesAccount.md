# AwsIamAliasesAccount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** |  | [optional] 
**role_name** | **str** |  | [optional] 

## Example

```python
from monad.models.aws_iam_aliases_account import AwsIamAliasesAccount

# TODO update the JSON string below
json = "{}"
# create an instance of AwsIamAliasesAccount from a JSON string
aws_iam_aliases_account_instance = AwsIamAliasesAccount.from_json(json)
# print the JSON string representation of the object
print(AwsIamAliasesAccount.to_json())

# convert the object into a dict
aws_iam_aliases_account_dict = aws_iam_aliases_account_instance.to_dict()
# create an instance of AwsIamAliasesAccount from a dict
aws_iam_aliases_account_from_dict = AwsIamAliasesAccount.from_dict(aws_iam_aliases_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


