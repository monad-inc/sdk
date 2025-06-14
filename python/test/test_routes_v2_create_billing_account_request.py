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

from monad.models.routes_v2_create_billing_account_request import RoutesV2CreateBillingAccountRequest

class TestRoutesV2CreateBillingAccountRequest(unittest.TestCase):
    """RoutesV2CreateBillingAccountRequest unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> RoutesV2CreateBillingAccountRequest:
        """Test RoutesV2CreateBillingAccountRequest
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `RoutesV2CreateBillingAccountRequest`
        """
        model = RoutesV2CreateBillingAccountRequest()
        if include_optional:
            return RoutesV2CreateBillingAccountRequest(
                billing_email = '',
                description = '',
                name = ''
            )
        else:
            return RoutesV2CreateBillingAccountRequest(
                billing_email = '',
                name = '',
        )
        """

    def testRoutesV2CreateBillingAccountRequest(self):
        """Test RoutesV2CreateBillingAccountRequest"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
