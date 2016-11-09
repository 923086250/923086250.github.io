
describe("开始calc.js的测试",function(){
	
	it("测试两数相加之和",function(){
		expect(plus(3,5)).toEqual(8);
		expect(plus(-3,-2)).toEqual(-5);
		expect(plus("1","d")).toEqual("1d");
	});
	
	
	it("测试两数的平方和",function(){
		expect(pingfanghe(2,2)).toEqual(8);
		expect(pingfanghe(-2,-2)).toEqual(8);
		expect(pingfanghe(3,5)).toEqual(34);
	});
	
	
	it("测试阶乘",function(){
		expect(jiecheng(1)).toEqual(1);
		expect(jiecheng(10)).toEqual(3628800);
		expect(jiecheng(5)).toEqual(120);
	});
	
	
	describe("排列组合测试",function(){
		
		it("排列测试",function(){
			expect(pailie(10,5)).toEqual(30240);
			expect(pailie(1,1)).toEqual(1);
			expect(pailie(5,3)).toEqual(60);
		});
		
		it("组合测试",function(){
			expect(zuhe(5,3)).toEqual(10);
			expect(zuhe(10,5)).toEqual(252);
			expect(zuhe(10,9)).toEqual(10);
			expect(zuhe).toThrowError("参数不够");
		});
		
		
		
//		it("排重测试",function(){
//			expect(paichong([1,2,2,3,4,4,5])).toEqual([1,2,3,4,5]);
//		});
		
	});
	
	
});



