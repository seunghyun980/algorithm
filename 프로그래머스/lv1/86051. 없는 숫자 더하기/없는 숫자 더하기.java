class Solution {
    public int solution(int[] numbers) {
        int answer = -1;
        
        int sum =0;
        for(int num : numbers){
            sum += num;
        }

        answer = 45-sum;
        return answer;
    }
}