# coding: utf-8

"""
    Monad Swagger API

    This is the monad API

    The version of the OpenAPI document: 1.0
    Contact: support@swagger.io
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from monad.models.models_billing_account import ModelsBillingAccount

class TestModelsBillingAccount(unittest.TestCase):
    """ModelsBillingAccount unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> ModelsBillingAccount:
        """Test ModelsBillingAccount
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `ModelsBillingAccount`
        """
        model = ModelsBillingAccount()
        if include_optional:
            return ModelsBillingAccount(
                billing_email = '',
                created_at = '',
                description = '',
                id = '',
                name = '',
                status = '',
                updated_at = ''
            )
        else:
            return ModelsBillingAccount(
        )
        """

    def testModelsBillingAccount(self):
        """Test ModelsBillingAccount"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
